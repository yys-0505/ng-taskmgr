import { createAction, props } from "@ngrx/store";
import { User } from "../domain/user.model";
import { Project } from '../domain/project.model';

export interface UserProject {
  user: User;
  projectId: string;
}

export const ADD = '[User] Add User Project';
export const ADD_SUCCESS = '[User] Add User Project Success';
export const ADD_FAIL = '[User] Add User Project Fail';
export const UPDATE = '[User] Update User Project';
export const UPDATE_SUCCESS = '[User] Update User Project Success';
export const UPDATE_FAIL = '[User] Update User Project Fail';
export const DELETE = '[User] Delete User Project';
export const DELETE_SUCCESS = '[User] Delete User Project Success';
export const DELETE_FAIL = '[User] Delete User Project Fail';
export const LOAD = '[User] Load Users By Projects';
export const LOAD_SUCCESS = '[User] Load Users By Projects Success';
export const LOAD_FAIL = '[User] Load Users By Projects Fail';
export const SEARCH = '[User] Search';
export const SEARCH_SUCCESS = '[User] Search Success';
export const SEARCH_FAIL = '[User] Search Fail';

export const add = createAction(
  ADD,
  props<{payload: UserProject}>()
);
export const addSuccess = createAction(
  ADD_SUCCESS,
  props<{payload: User}>()
);
export const addFail = createAction(
  ADD_FAIL,
  props<{payload: string}>()
);

export const update = createAction(
  UPDATE,
  props<{payload: Project}>()
);
export const updateSuccess = createAction(
  UPDATE_SUCCESS,
  props<{payload: User[]}>()
);
export const updateFail = createAction(
  UPDATE_FAIL,
  props<{payload: string}>()
);

export const deleteAction = createAction(
  DELETE,
  props<{payload: UserProject}>()
);
export const deleteSuccess = createAction(
  DELETE_SUCCESS,
  props<{payload: User}>()
);
export const deleteFail = createAction(
  DELETE_FAIL,
  props<{payload: string}>()
);

export const load = createAction(
  LOAD,
  props<{payload: string}>()
);
export const loadSuccess = createAction(
  LOAD_SUCCESS,
  props<{payload: User[]}>()
);
export const loadFail = createAction(
  LOAD_FAIL,
  props<{payload: string}>()
);

export const search = createAction(
  SEARCH,
  props<{payload: string}>()
);
export const searchSuccess = createAction(
  SEARCH_SUCCESS,
  props<{payload: User[]}>()
);
export const searchFail = createAction(
  SEARCH_FAIL,
  props<{payload: string}>()
);