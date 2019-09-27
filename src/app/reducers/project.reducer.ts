import { createReducer, on, Action, createSelector } from "@ngrx/store";
import * as actions from '../actions';
import { Project } from "../domain";
import * as _ from "lodash";

export interface State {
  ids: string[];
  entities: {[id: string]: Project};
  selectedId: string | null;
}

export const initialState: State = {
  ids: [],
  entities: {},
  selectedId: null
};

const addProject = (state, action) => {
  const project = action.payload;
  if (state.entities[project.id]) {
    return state;
  }
  const newIds = [...state.ids, project.id];
  const newEntities = {...state.entities, [project.id]: project};
  return {...state, ids: newIds, entities: newEntities}
}

const updateProject = (state, action) => {
  const project = action.payload;
  const newEntities = {...state.entities, [project.id]: project};
  return {...state, newEntities};
}

const delProject = (state, action) => {
  const project = action.payload;
  const newIds = state.ids.filter(id => id !== project.id);
  const newEntities = newIds.reduce((entities, id:string) => ({...entities, [id]:state.entities[id]}), {});
  return {
    ids: newIds,
    entities: newEntities,
    selectedId: project.id === state.selectedId ? null : state.selectedId
  };
}

const loadProjects = (state, action) => {
  const projects = action.payload;
  const incomingIds = projects.map(p => p.id);
  const newIds = _.difference(incomingIds, state.ids);
  const incomingEntities = _.chain(projects)
    .keyBy('id')
    .mapValues(o => o)
    .value();
  const newEntities = newIds.reduce((entities, id:string) => ({...entities, [id]: incomingEntities[id]}), {});
  return {
    ids: [...state.ids, ...newIds],
    entities: {...state.entities, ...newEntities},
    selectedId: null
  }
}

const projectReducer = createReducer(initialState,
  on(actions.addSuccess, (state, action) => addProject(state, action)),
  on(actions.deleteSuccess, (state, action) => delProject(state, action)),
  on(
    actions.updateSuccess,
    actions.inviteSuccess,
    (state, action) => updateProject(state, action)),
  on(actions.loadSuccess, (state, action) => loadProjects(state, action)),
  on(actions.select, (state, actions) => ({...state, selectedId: actions.payload.id})),
);


export function reducer(state: State | undefined, action: Action) {
  return projectReducer(state, action);
}

export const getIds = (state: State) => state.ids;
export const getEntities = (state: State) => state.entities;
export const getSelectedId = (state: State) => state.selectedId;

export const getAll = createSelector(getIds, getEntities, (ids, entities) => {
  return ids.map(id => entities[id]);
});
