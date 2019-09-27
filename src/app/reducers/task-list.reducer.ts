import { createReducer, on, Action, createSelector } from "@ngrx/store";
import * as actions from "../actions/task-list.action";
import * as prjActions from "../actions/project.action";
import { Project, TaskList } from '../domain';
import * as _ from "lodash";

export interface State {
  ids: string[];
  entities: {[id: string]: TaskList};
  selectedIds: string[];
}

export const initialState: State = {
  ids: [],
  entities: {},
  selectedIds: [],
}

const addTaskList = (state, action) => {
  const taskList = action.payload;console.log(taskList);
  if (state.entities[taskList.id]) {
    return state;
  }
  const newIds = [...state.ids, taskList.id];
  const newEntities = {...state.entities, [taskList.id]: taskList};
  return {...state, ids: newIds, entities: newEntities};
}

const delTaskList = (state, action) => {
  const taskList = action.payload;
  const newIds = state.ids.filter(id => id !== taskList.id);
  const newEntities = newIds.reduce((entities, id) => ({...entities, [id]: state.entities[id]}), {});
  const newSelectedIds = state.selectedIds.filter(id => id !== taskList.id);
  return {
    ids: newIds,
    entities: newEntities,
    selectedIds: newSelectedIds
  }
}

const loadTaskList = (state, action) => {
  const taskLists = <TaskList[]>action.payload;
  if (taskLists === null) {
    return state;
  }
  const newTaskLists = taskLists.filter(taskList => !state.entities[taskList.id]);
  if (newTaskLists.length === 0) {
    return {
      ids: [],
      entities: {},
      selectedIds: state.selectedIds
    };
  }
  const newIds = newTaskLists.map(taskList => taskList.id);
  const incomingEntities = _.chain(taskLists)
    .keyBy('id')
    .mapValues(o => o)
    .value();
  const newEntities = newIds.reduce((entities, id: string) => ({...entities, [id]: incomingEntities[id]}), {});
  return {
    ...state,
    ids: [...state.ids, ...newIds],
    entities: {...state.entities, ...newEntities}
  }
}

const updateTaskList = (state, action) => {
  const taskList = action.payload;
  const newEntities = {...state.entities, [taskList.id]: taskList};
  return {...state, entities: newEntities};
}

const swapTaskLists = (state, action) => {
  const taskLists = <TaskList[]>action.payload;
  const updatedEntities = _.chain(taskLists)
    .keyBy('id')
    .mapValues(o => o)
    .values();
  const newEntities = {...state.entities, ...updatedEntities};
  return {...state, entities: newEntities};
}

const selectPrj = (state, action) => {
  const selected = <Project>action.payload;
  const selectedIds = state.ids.filter(id => state.entities[id].projectId === selected.id);
  return {...state, selectedIds};
}

const delListsByPrj = (state, action) => {
  const project = <Project>action.payload;
  const taskListIds = project.taskLists;
  const remainingIds = _.difference(state.ids, taskListIds);
  const remainingEntities = remainingIds.reduce((entities, id) => ({...entities, [id]: state.entities[id]}), {});
  return {
    ids: [...remainingIds],
    entities: remainingEntities,
    selectedIds: []
  }
}

const taskListReducer = createReducer(initialState,
  on(actions.addSuccess, (state, action) => addTaskList(state, action)),
  on(actions.deleteSuccess, (state, action) => delTaskList(state, action)),
  on(actions.loadSuccess, (state, action) => loadTaskList(state, action)),
  on(actions.updateSuccess, (state, action) => updateTaskList(state, action)),
  on(actions.swapSuccess, (state, action) => swapTaskLists(state, action)),
  on(prjActions.select, (state, action) => selectPrj(state, action)),
  on(prjActions.deleteSuccess, (state, action) => delListsByPrj(state, action)),
)

export function reducer(state: State | undefined, action: Action) {
  return taskListReducer(state, action);
}

export const getIds = (state: State) => state.ids;
export const getEntities = (state: State) => state.entities;
export const getSelectedIds = (state: State) => state.selectedIds;

export const getSelected = createSelector(getIds, getEntities, (ids, entities) => {
  return ids.map(id => entities[id]);
});