import { createReducer, on, Action, createSelector } from "@ngrx/store";
import * as actions from '../actions/task.action';
import * as prjActions from '../actions/project.action';
import { Task } from '../domain/task.model';
import * as _ from 'lodash';
import { Project } from "../domain/project.model";

export interface State {
  ids: string[];
  entities: {[id: string]: Task};
}

export const initialState: State = {
  ids: [],
  entities: {},
}

const addTask = (state, action) => {
  const task = action.payload;
  if (state.entities[task.id]) {
    return;
  }
  const newIds = [...state.ids, task.id];
  const newEntities = {...state.entities, [task.id]: task};
  return {
    ids: newIds,
    entities: newEntities
  }
}

const delTask = (state, action) => {
  const task = action.payload;
  const newIds = state.ids.filter(id => id!==task.id);
  const newEntities = newIds.reduce((entities, id) => ({...entities, [id]:state.entities[id]}), {});
  return {
    ids: newIds,
    entities: newEntities
  }
}

const updateTask = (state, action) => {
  const task = action.payload;
  const newEntities = {...state.entities, [task.id]:task};
  return {...state, entities: newEntities};
}

const loadTask = (state, action) => {
  const tasks = action.payload;
  const newTasks = tasks.filter(task => !state.entities[task.id]);
  const newIds = newTasks.map(t => t.id);
  const incomingEntities = _.chain(tasks)
    .keyBy('id')
    .mapValues(o => o)
    .value();
  const newEntities = newIds.reduce((entities, id) => ({...entities, [id]:incomingEntities[id]}), {});
  return {
    ids: [...state.ids, ...newIds],
    entities: {...state.entities, ...newEntities}
  }
}

const moveAllTasks = (state, action) => {
  const tasks = <Task[]>action.payload;
  const updatedEntities = tasks.reduce((entities, task) => ({...entities, [task.id]: task}), {});
  const newEntities = {...state.entities, ...updatedEntities};
  return {
    ...state,
    entities: newEntities
  }
}

const delByPrj = (state, action) => {
  const project = <Project>action.payload;
  const taskListIds = project.taskLists;
  const remainingIds = state.ids.filter(id => taskListIds.indexOf(state.entities[id].taskListId) === -1);
  const remainingEntities = remainingIds.reduce((entities, id) =>({...entities, [id]:state.entities[id]}), {});
  return {
    ids: remainingIds,
    entities: remainingEntities
  }
}

const taskReducer = createReducer(initialState,
  on(actions.addSuccess, (state, action) => addTask(state, action)),
  on(actions.deleteSuccess, (state,action) => delTask(state, action)),
  on(
    actions.updateSuccess,
    actions.moveSuccess,
    actions.completeSuccess,
    (state, action) => updateTask(state, action)),
  on(actions.loadSuccess, (state, action) => loadTask(state, action)),
  on(actions.moveAllSuccess, (state, action) => moveAllTasks(state, action)),
  on(prjActions.deleteSuccess, (state, action) => delByPrj(state, action)),
);

export const getIds = (state: State) => state.ids;
export const getEntities = (state: State) => state.entities;

export const getTasks = createSelector(getIds, getEntities, (ids, entities) => {
  return ids.map(id => entities[id]);
});

export function reducer(state: State | undefined, action: Action) {
  return taskReducer(state, action);
}