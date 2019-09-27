import { createAction, props } from "@ngrx/store";
import { Auth, User } from "../domain";

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAIL = '[Auth] Login Fail';
export const REGISTER = '[Auth] Register';
export const REGISTER_SUCCESS = '[Auth] Register Success';
export const REGISTER_FAIL = '[Auth] Register Fail';
export const LOGOUT = '[Auth] Logout';

export const login = createAction(
  LOGIN,
  props<{email:string,password:string}>()
);
export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<Auth>()
);
export const loginFail = createAction(
  LOGIN_FAIL,
  props<{}>()
);

export const register = createAction(
  REGISTER,
  props<User>()
);
export const registerSuccess = createAction(
  REGISTER_SUCCESS,
  props<Auth>()
);
export const registerFail = createAction(
  REGISTER_FAIL,
  props<{}>()
);

export const logout = createAction(
  LOGOUT,
  props<Object>()
);
