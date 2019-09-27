import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, exhaustMap, tap } from "rxjs/operators";
import { AuthService } from "../services/auth.service";
import * as actions from "../actions";
import { User } from '../domain';
import { Action } from "@ngrx/store";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {

  login$:Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.LOGIN),
      exhaustMap(({email, password}) =>
        this.service.login(email, password).pipe(
          map(auth => actions.loginSuccess(auth)),
          catchError(error => of(actions.loginFail(error)))
        )
      )
    )
  );

  register$:Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.REGISTER),
      exhaustMap((user: User) =>
        this.service.register(user).pipe(
          map(auth => actions.registerSuccess(auth)),
          catchError(error => of(actions.registerFail(error)))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.LOGOUT),
      tap((_) => {
        this.router.navigateByUrl('/');
      })
    ), { dispatch: false}
  );

  loginAndNavigate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.LOGIN_SUCCESS),
      tap((_) => {
        this.router.navigateByUrl('/projects');
      })
    ), { dispatch: false}
  );

  registerAndNavigate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.REGISTER_SUCCESS),
      tap((_) => {
        this.router.navigateByUrl('/projects');
      })
    ), { dispatch: false}
  );
  constructor(
    private actions$: Actions,
    private service: AuthService,
    private router: Router
  ) {}
}