import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { exhaustMap, map, catchError } from "rxjs/operators";
import { TaskListService } from '../services/task-list.service';
import * as actions from "../actions/task-list.action";
import * as taskActions from '../actions/task.action';

@Injectable()
export class TaskListEffects {

  loadTaskList$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.load),
      exhaustMap(action =>
        this.service$.get(action.payload).pipe(
          map(taskLists => actions.loadSuccess({payload: taskLists})),
          catchError(error => of(actions.loadFail(error)))
        )
      )
    )
  );

  addTaskList$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.add),
      exhaustMap(action =>
        this.service$.add(action.payload).pipe(
          map(taskList => actions.addSuccess({payload: taskList})),
          catchError(error => of(actions.addFail(error)))
        )
      )
    )
  );

  updateTaskList$:Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.update),
      exhaustMap(action =>
        this.service$.update(action.payload).pipe(
          map(taskList => actions.updateSuccess({payload: taskList})),
          catchError(error => of(actions.updateFail(error)))
        )  
      )
    )
  );

  delTaskList$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deleteTaskList),
      exhaustMap(action =>
        this.service$.delete(action.payload).pipe(
          map(taskList => actions.deleteSuccess({payload: taskList})),
          catchError(error => of(actions.deleteFail(error)))
        )  
      )
    )
  );

  swap$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.SWAP),
      exhaustMap(({src, target}) =>
        this.service$.swapOrder(src, target).pipe(
          map(taskLists => actions.swapSuccess({payload: taskLists})),
          catchError(error => of(actions.swapFail(error)))
        )
      )
    )
  );

  loadTasksInLists$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadSuccess),
      map(action => taskActions.load({payload: action.payload}))
    )
  );

  constructor(
    private actions$: Actions,
    private service$: TaskListService
  ) { }
}