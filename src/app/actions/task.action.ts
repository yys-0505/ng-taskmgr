import { createAction, props } from '@ngrx/store';
import { TaskList } from "../domain/task-list.model";
import { Task } from '../domain/task.model'

export const ADD = '[Task] Add';
export const ADD_SUCCESS = '[Task] Add Success';
export const ADD_FAIL = '[Task] Add Fail';
export const UPDATE = '[Task] Update';
export const UPDATE_SUCCESS = '[Task] Update Success';
export const UPDATE_FAIL = '[Task] Update Fail';
export const DELETE = '[Task] Delete';
export const DELETE_SUCCESS = '[Task] Delete Success';
export const DELETE_FAIL = '[Task] Delete Fail';
export const LOAD = '[Task] Load';
export const LOAD_SUCCESS = '[Task] Load Success';
export const LOAD_FAIL = '[Task] Load Fail';
export const MOVE = '[Task] Move';
export const MOVE_SUCCESS = '[Task] Move Success';
export const MOVE_FAIL = '[Task] Move Fail';
export const MOVE_ALL = '[Task] Move All';
export const MOVE_ALL_SUCCESS = '[Task] Move All Success';
export const MOVE_ALL_FAIL = '[Task] Move All Fail';
export const COMPLETE = '[Task] Complete All';
export const COMPLETE_SUCCESS = '[Task] Complete All Success';
export const COMPLETE_FAIL = '[Task] Complete All Fail';

export const add = createAction(
  ADD,
  props<{payload: Task}>()
);
export const addSuccess = createAction(
  ADD_SUCCESS,
  props<{payload: Task}>()
);
export const addFail = createAction(
  ADD_FAIL,
  props<{payload: string}>()
);

export const update = createAction(
  UPDATE,
  props<{payload: Task}>()
);
export const updateSuccess = createAction(
  UPDATE_SUCCESS,
  props<{payload: Task}>()
);
export const updateFail = createAction(
  UPDATE,
  props<{payload: string}>()
);

export const deleteAction = createAction(
  DELETE,
  props<{payload: Task}>()
);
export const deleteSuccess = createAction(
  DELETE_SUCCESS,
  props<{payload: Task}>()
);
export const deleteFail = createAction(
  DELETE_FAIL,
  props<{payload: string}>()
);

export const load = createAction(
  LOAD,
  props<{payload: TaskList[]}>()
);
export const loadSuccess = createAction(
  LOAD_SUCCESS,
  props<{payload: Task[]}>()
);
export const loadFail = createAction(
  LOAD_FAIL,
  props<{payload: string}>()
);

export const move = createAction(
  MOVE,
  props<{payload: {taskId: string, taskListId: string}}>()
);
export const moveSuccess = createAction(
  MOVE_SUCCESS,
  props<{payload: Task}>()
);
export const moveFail = createAction(
  MOVE_FAIL,
  props<{payload: string}>()
);

export const moveAll = createAction(
  MOVE_ALL,
  props<{payload: {srcListId: string, targetListId: string}}>()
);
export const moveAllSuccess = createAction(
  MOVE_ALL_SUCCESS,
  props<{payload: Task[]}>()
);
export const moveAllFail = createAction(
  MOVE_ALL_FAIL,
  props<{payload: string}>()
);

export const complete = createAction(
  COMPLETE,
  props<{payload: Task}>()
);
export const completeSuccess = createAction(
  COMPLETE_SUCCESS,
  props<{payload: Task}>()
);
export const completeFail = createAction(
  COMPLETE_FAIL,
  props<{payload: string}>()
);