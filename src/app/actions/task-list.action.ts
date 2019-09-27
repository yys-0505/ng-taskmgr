import { createAction, props } from "@ngrx/store";
import { TaskList } from "../domain/task-list.model";

export const ADD = '[TaskList] Add';
export const ADD_SUCCESS = '[TaskList] Add Success';
export const ADD_FAIL = '[TaskList] Add Fail';

export const UPDATE = '[TaskList] Update';
export const UPDATE_SUCCESS = '[TaskList] Update Success';
export const UPDATE_FAIL = '[TaskList] Update Fail';

export const DELETE = '[TaskList] Delete';
export const DELETE_SUCCESS = '[TaskList] Delete Success';
export const DELETE_FAIL = '[TaskList] Delete Fail';

export const LOAD = '[TaskList] Load';
export const LOAD_SUCCESS = '[TaskList] Load Success';
export const LOAD_FAIL = '[TaskList] Load Fail';

export const SWAP = '[TaskList] Swap';
export const SWAP_SUCCESS = '[TaskList] Swap Success';
export const SWAP_FAIL = '[TaskList] Swap Fail';

export const add = createAction(
  ADD,
  props<{payload: TaskList}>()
)
export const addSuccess = createAction(
  ADD_SUCCESS,
  props<{payload: TaskList}>()
)
export const addFail = createAction(
  ADD_FAIL,
  props<{payload: string}>()
)

export const update = createAction(
  UPDATE,
  props<{payload: TaskList}>()
);
export const updateSuccess = createAction(
  UPDATE_SUCCESS,
  props<{payload: TaskList}>()
);
export const updateFail = createAction(
  UPDATE_FAIL,
  props<{payload: string}>()
);

export const deleteTaskList = createAction(
  DELETE,
  props<{payload: TaskList}>()
);
export const deleteSuccess = createAction(
  DELETE_SUCCESS,
  props<{payload: TaskList}>()
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
  props<{payload: TaskList[]}>()
);
export const loadFail = createAction(
  LOAD_FAIL,
  props<{payload: string}>()
);

export const swap = createAction(
  SWAP,
  props<{payload: {src: TaskList, target: TaskList}}>()
);
export const swapSuccess = createAction(
  SWAP_SUCCESS,
  props<{payload: TaskList[]}>()
);
export const swapFail = createAction(
  SWAP_FAIL,
  props<{payload: string}>()
);