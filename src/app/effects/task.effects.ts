import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Observable, of } from "rxjs";
import { exhaustMap, map, catchError } from "rxjs/operators";
import { TaskService } from '../services/task.service'
import * as actions from '../actions/task.action';

@Injectable()
export class TaskEffects {
  loadTasks$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.load),
      exhaustMap(action =>
        this.service$.getByLists(action.payload).pipe(
          map(tasks => actions.loadSuccess({payload: tasks})),
          catchError(error => of(actions.loadFail({payload: error})))
        )
      )
    )
  );

  addTask$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.add),
      exhaustMap(action =>
        this.service$.add(action.payload).pipe(
          map(t => actions.addSuccess({payload: t})),
          catchError(error => of(actions.addFail({payload: error})))
        )
      )
    )
  );

  update$:Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.update),
      exhaustMap(action =>
        this.service$.update(action.payload).pipe(
          map(task => actions.updateSuccess({payload: task})),
          catchError(error => of(actions.updateFail({payload: error})))
        )
      )
    )
  );

  delTask$:Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deleteAction),
      exhaustMap(action =>
        this.service$.delete(action.payload).pipe(
          map(task => actions.deleteSuccess({payload: task})),
          catchError(error => of(actions.deleteFail({payload: error})))
        )  
      )
    )
  );

  complete$:Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.complete),
      exhaustMap(action =>
        this.service$.complete(action.payload).pipe(
          map(task => actions.completeSuccess({payload: task})),
          catchError(error => of(actions.completeFail({payload: error})))
        )
      )
    )
  );

  move$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.MOVE),
      exhaustMap(({taskId, taskListId}) =>
        this.service$.move(taskId, taskListId).pipe(
          map(task => actions.moveSuccess({payload: task})),
          catchError(error => of(actions.moveFail({payload: error})))
        )
      )
    )
  );

  moveALL$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.MOVE_ALL),
      exhaustMap(({payload: {srcListId, targetListId}}) =>
        this.service$.moveAll(srcListId, targetListId).pipe(
          map(tasks => actions.moveAllSuccess({payload: tasks})),
          catchError(error => of(actions.moveAllFail({payload: error})))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private service$: TaskService,
  ) {}
 }