import * as actions from '../actions/quote.action';
import { Quote } from '../domain'

//new
import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store';

export interface State {
  quote: Quote
};

export const initialState: State = {
  quote: {
    cn: "满足感在于不断的努力,而不是现有的成就。全心努力定会胜利满满。",
    en: "Satisfaction lies in the effort, not in the attainment. Full efforts is full victory.",
    pic: "assets/img/quote_fallback.jpg"
  }
};

export const quoteReducer = createReducer(initialState,
  on(actions.quoteLoadSuccess, (state, payload) => {
    return {...state, quote: payload}
  }),
  on(
    actions.quoteLoad,
    actions.quoteLoadFail,
    state => state)
);

export function reducer(state: State | undefined, action: Action) {
  return quoteReducer(state, action);
}

export const getQuote = (state: State) => state.quote;