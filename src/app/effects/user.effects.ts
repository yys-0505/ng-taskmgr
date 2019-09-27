import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Observable, of} from 'rxjs';
import { exhaustMap, catchError, map } from 'rxjs/operators';
import * as actions from '../actions/user.action';
import { UserService } from '../services/user.service';

@Injectable()
export class UserEffects {

  loadUsers$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.load),
      exhaustMap(action =>
        this.service$.getUsersByProject(action.payload).pipe(
          map(users => actions.loadSuccess({payload: users})),
          catchError(error => of(actions.loadFail({payload:error})))
        )
      )
    )
  );

  addUserProjectRef$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.ADD),
      exhaustMap(({payload: {user, projectId}}) =>
        this.service$.addProjectRef(user, projectId).pipe(
          map(user => actions.addSuccess({payload: user})),
          catchError(error => of(actions.addFail({payload: error})))
        )
      )
    )
  );

  updateUserProjectRef$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.update),
      exhaustMap(action =>
        this.service$.batchUpdateProjectRef(action.payload).pipe(
          map(users => actions.updateSuccess({payload: users})),
          catchError(error => of(actions.updateFail({payload: error})))
        )
      )
    )
  );

  delUserProjectRef$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.DELETE),
      exhaustMap(({payload: {user, projectId}}) =>
        this.service$.removeProjectRef(user, projectId).pipe(
          map(user => actions.deleteSuccess({payload:user})),
          catchError(error => of(actions.deleteFail({payload: error})))
        )
      )
    )
  );

  search$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.search),
      exhaustMap(action =>
        this.service$.searchUsers(action.payload).pipe(
          map(users => actions.searchSuccess({payload: users})),
          catchError(error => of(actions.searchFail({payload: error})))
        )  
      )
    )
  );

  constructor(
    private actions$: Actions,
    private service$: UserService,
  ) {}
}