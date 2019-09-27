import { createAction, props } from '@ngrx/store';
import { Quote } from "../domain/quote.model";
export const QUOTE_LOAD = '[Quote] Load';
export const QUOTE_SUCCESS = '[Quote] Load Success';
export const QUOTE_FAIL = '[Quote] Load Fail';


export const quoteLoad = createAction(
  QUOTE_LOAD,
  props<Object>()
);

export const quoteLoadSuccess = createAction(
  QUOTE_SUCCESS,
  props<Quote>()
);

export const quoteLoadFail = createAction(
  QUOTE_FAIL,
  props<Object>()
);
