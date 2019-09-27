import { createReducer, on, Action } from "@ngrx/store";
import { Auth } from "../domain";
import * as actions from '../actions/auth.action';

export const initialState: Auth = {};

export const authReducer = createReducer(initialState,
  on(actions.loginSuccess, (state, payload) => {
    return {...<Auth>payload};
  }),
  on(actions.registerSuccess, (state, payload) => {
    return {...<Auth>payload};
  }),
  on(
    actions.loginFail,
    actions.registerFail,
    actions.logout, _ => initialState),
);

export function reducer(state: Auth | undefined, action: Action) {
  return authReducer(state, action);
}
