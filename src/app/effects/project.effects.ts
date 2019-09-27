import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { Store, Action, select } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, switchMap, map, withLatestFrom, catchError, concatMap, tap } from "rxjs/operators";
import { Router } from "@angular/router";
import * as actions from '../actions/project.action';
import { ProjectService } from '../services/project.service';
import * as fromRoot from "../reducers";
import * as listActions from "../actions/task-list.action";
import * as userActions from '../actions/user.action'

@Injectable()
export class ProjectEffects {
  
  loadProjects$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.LOAD),
      withLatestFrom(this.store$.pipe(select(fromRoot.getAuthState))),
      exhaustMap(([_, auth]) =>
        this.service$.get(auth.user.id).pipe(
          map(projects => actions.loadSuccess({payload: projects})),
          catchError(error => of(actions.loadFail(error)))
        )
      )
    )
  );

  addProject$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.add),
      concatMap(action => of(action).pipe(
        withLatestFrom(
          this.store$.pipe(select(fromRoot.getAuthState)).pipe(
            map(auth => auth.user)
          )
        ),
      )),
      exhaustMap(([action, user]) => {
        const added = {...action.payload, members: [`${user.id}`]};
        return this.service$.add(added).pipe(
          map(project => actions.addSuccess({payload: project})),
          catchError(error => of(actions.addFail(error)))
        )
      })
    )
  );

  updateProjects$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.UPDATE),
      exhaustMap(({payload}) =>
        this.service$.update(payload).pipe(
          map(project => actions.updateSuccess({payload: project})),
          catchError(error => of(actions.updateFail(error)))
        )
      )
    )
  );

  delProject$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.DELETE),
      exhaustMap(({payload}) =>
        this.service$.delete(payload).pipe(
          map(project => actions.deleteSuccess({payload: project})),
          catchError(error => of(actions.deleteFail(error)))
        )
      )
    )
  );

  selectProject$ : Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.select),
      tap(action => {
        this.router.navigateByUrl(`/tasklists/${action.payload.id}`);
      }),
      map(action => listActions.load({payload: action.payload.id}))
    )
  );

  invite$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.INVITE),
      exhaustMap(({projectId, members}) =>
        this.service$.invite(projectId, members).pipe(
          map(project => actions.inviteSuccess({payload: project})),
          catchError(error => of(actions.inviteFail(error)))
        )
      )
    )
  );

  loadUsers$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadSuccess),
      switchMap(action =>
        from(action.payload).pipe(
          map(prj => prj.id)
        )
      ),
      map(projectId => userActions.load({payload: projectId}))
    )
  );

  addUserProject$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.addSuccess),
      concatMap(action => of(action).pipe(
        withLatestFrom(
          this.store$.pipe(select(fromRoot.getAuthState)).pipe(
            map(auth => auth.user)
          )
        )
      )),
      map(([action, user]) =>
        userActions.add({payload:{user: user, projectId: action.payload.id}})
      )
    )
  );

  removeUserProject$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deleteSuccess),
      withLatestFrom(
        this.store$.pipe(select(fromRoot.getAuthState)).pipe(
          map(auth => auth.user)
        )
      ),
      map(([action, user]) =>
        userActions.deleteAction({payload: {user, projectId:action.payload.id}})
      )
    )
  );

  updateUserProject$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.inviteSuccess),
      map(action => userActions.update({payload: action.payload}))
    )
  );

  constructor(
    private actions$: Actions,
    private store$: Store<fromRoot.State>,
    private service$: ProjectService,
    private router: Router) {}
}