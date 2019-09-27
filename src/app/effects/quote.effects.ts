import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from 'rxjs';
import { mergeMap, map, catchError } from "rxjs/operators";
import { QuoteService } from "../services/quote.service";
import * as actions from "../actions";

@Injectable()
export class QuoteEffects {

  quote$ = createEffect(() => this.actions$.pipe(
    ofType(actions.QUOTE_LOAD),
    mergeMap(() => this.service.getQuote().pipe(
      map(q => actions.quoteLoadSuccess(q)),
      catchError(err => EMPTY)
    ))
  ));
  constructor( private actions$: Actions, private service: QuoteService ) { }
}