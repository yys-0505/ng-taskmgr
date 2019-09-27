import { createReducer, on, Action, createSelector } from '@ngrx/store';
import * as actions from '../actions/user.action';
import { User } from '../domain/user.model';
import * as _ from 'lodash';

export interface State {
  ids: string[];
  entities: {[id: string]: User};
};

export const initialState:State = {
  ids: [],
  entities: {},
};

const addUser = (state, action) => {
  const user = action.payload;
  const newIds = [...state.ids, user.id];
  const newEntities = {...state.entities, [user.id]: user};
  return state.entities[user.id] ?
    {...state, entities:newEntities} :
    {...state, ids: newIds, entities: newEntities}
}

const updateUser = (state, action) => {
  const users = <User[]>action.payload;
  const incomingEntities = _.chain(users)
    .keyBy('id')
    .mapValues(o => o)
    .value();
  const newEntities = {...state.entities, ...incomingEntities};
  return {...state, entities: newEntities}
}

const delUser = (state, action) => {
  const user = action.payload;
  const newEntities = {...state.entities, [user.id]: user};
  return state.entities[user.id] ?
    {...state, entities: newEntities}: state;
}

const loadUsers = (state, action) => {
  const users = action.payload;
  if (users === null) {
    return state;
  }
  const newUsers = users.filter(user => !state.entities[user.id]);
  const newIds = newUsers.map(user => user.id);
  if (newIds.length === 0) {
    return state;
  }
  const incomingEntities = _.chain(users)
    .keyBy('id')
    .mapValues(o => o)
    .value();
  const newEntities = newIds.reduce((entities, id) => ({...entities, [id]: incomingEntities[id]}), {});
  return {
    ids: [...state.ids, ...newIds],
    entities: {...state.entities, ...newEntities}
  }
}

const userReducer = createReducer(initialState,
  on(actions.addSuccess, (state, action) => addUser(state, action)),
  on(actions.updateSuccess, (state, action) => updateUser(state, action)),
  on(actions.deleteSuccess, (state, action) => delUser(state, action)),
  on(
    actions.loadSuccess,
    actions.searchSuccess,
    (state, action) => loadUsers(state, action)),

);

export const getIds = (state: State) => state.ids;
export const getEntities = (state: State) => state.entities;

export const getUsers = createSelector(getIds, getEntities, (ids, entities) => {
  return ids.map(id => entities[id]);
})

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}