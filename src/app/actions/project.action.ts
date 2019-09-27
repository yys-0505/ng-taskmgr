import { createAction, props } from "@ngrx/store";
import { Project, User } from "../domain";

export const ADD = '[Project] Add';
export const ADD_SUCCESS = '[Project] Add Success';
export const ADD_FAIL = '[Project] Add Fail';

export const UPDATE = '[Project] Update';
export const UPDATE_SUCCESS = '[Project] Update Success';
export const UPDATE_FAIL = '[Project] Update Fail';

export const DELETE = '[Project] Delete';
export const DELETE_SUCCESS = '[Project] Delete Success';
export const DELETE_FAIL = '[Project] Delete Fail';

export const LOAD = '[Project] Load';
export const LOAD_SUCCESS = '[Project] Load Success';
export const LOAD_FAIL = '[Project] Load Fail';

export const INVITE = '[Project] Invite';
export const INVITE_SUCCESS = '[Project] Invite Success';
export const INVITE_FAIL = '[Project] Invite Fail';

export const SELECT_PROJECT = '[Project] Select Project';

export const add = createAction(
  ADD,
  props<{payload: Project}>()
)
export const addSuccess = createAction(
  ADD_SUCCESS,
  props<{payload: Project}>()
)
export const addFail = createAction(
  ADD_FAIL,
  props<{payload: string}>()
)

export const update = createAction(
  UPDATE,
  props<{payload: Project}>()
);
export const updateSuccess = createAction(
  UPDATE_SUCCESS,
  props<{payload: Project}>()
);
export const updateFail = createAction(
  UPDATE_FAIL,
  props<{payload: string}>()
);

export const deleteProject = createAction(
  DELETE,
  props<{payload: Project}>()
);
export const deleteSuccess = createAction(
  DELETE_SUCCESS,
  props<{payload: Project}>()
);
export const deleteFail = createAction(
  DELETE_FAIL,
  props<{payload: string}>()
);

export const load = createAction(
  LOAD,
  props<{payload: null}>()
);
export const loadSuccess = createAction(
  LOAD_SUCCESS,
  props<{payload: Project[]}>()
);
export const loadFail = createAction(
  LOAD_FAIL,
  props<{payload: string}>()
);

export const select = createAction(
  SELECT_PROJECT,
  props<{payload: Project}>()
);

export const invite = createAction(
  INVITE,
  props<{payload: {projectId: string, members: User[]}}>()
);
export const inviteSuccess = createAction(
  INVITE_SUCCESS,
  props<{payload: Project}>()
);
export const inviteFail = createAction(
  INVITE_FAIL,
  props<{payload: string}>()
);