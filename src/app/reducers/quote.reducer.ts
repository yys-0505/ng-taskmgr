import * as actions from '../actions';
import { Quote } from '../domain'

//new
import { createReducer, on } from '@ngrx/store';
import { quoteLoad } from '../actions/quote.action';

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

// export function reducer(state = initialState, action: {type: string, payload: any} ): State {
//   switch (action.type) {
//     case quoteAction.QUOTE_SUCCESS: {
//       return {...state, quote: action.payload};
//     }
//     case quoteAction.QUOTE_FAIL:
//     default: {
//       return state;
//     }
//   }
// }

//new
export const reducer = createReducer(initialState,
  on(actions.quoteLoadSuccess, (state, payload) => {
    return {...state, quote: payload}
  }),
  on(
    actions.quoteLoad,
    actions.quoteLoadFail,
    state => state)
);

export const getQuote = (state: State) => state.quote;