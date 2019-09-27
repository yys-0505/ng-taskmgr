import { Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { MatDialog } from "@angular/material";
import { NewTaskComponent } from "../new-task/new-task.component";
import { CopyTaskComponent } from "../copy-task/copy-task.component";
import { ConfirmDialogComponent } from "../../shared/confirm-dialog/confirm-dialog.component";
import { NewTaskListComponent } from "../new-task-list/new-task-list.component";
import { slideToRight } from "../../anims/router.anim";
import * as fromRoot from "../../reducers";
import { ActivatedRoute } from "@angular/router";
import { Observable, of } from "rxjs";
import { switchMap, take, filter, map, tap, withLatestFrom } from "rxjs/operators";
import { TaskList, Task } from '../../domain';
import * as actions from "../../actions/task-list.action";
import * as taskActions from "../../actions/task.action";

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [
    slideToRight
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@routeAnim') state;

  // lists = [{
  //   id: 1,
  //   name: '待办',
  //   order: 1,
  //   tasks: [{
  //     id: 1,
  //     desc: '任务一: 去星巴克买杯咖啡',
  //     completed: true,
  //     priority: 3,
  //     owner: {
  //       id: 1,
  //       name: '王五',
  //       avatar: 'avatars:svg-13'
  //     },
  //     dueDate: new Date(),
  //     reminder: new Date()
  //   }, {
  //     id: 2,
  //     desc: '任务二: 完成老板布置的任务',
  //     completed: false,
  //     priority: 2,
  //     owner: {
  //       id: 1,
  //       name: '李四',
  //       avatar: 'avatars:svg-12'
  //     },
  //     dueDate: new Date()
  //   }]
  // }, {
  //   id: 2,
  //   name: '进行中',
  //   order: 2,
  //   tasks: [{
  //     id: 1,
  //     desc: '任务三: 项目代码评审',
  //     completed: false,
  //     priority: 1,
  //     owner: {
  //       id: 1,
  //       name: '王五',
  //       avatar: 'avatars:svg-13'
  //     },
  //     dueDate: new Date()
  //   }, {
  //     id: 2,
  //     desc: '任务四: 制定项目计划',
  //     completed: false,
  //     priority: 2,
  //     owner: {
  //       id: 1,
  //       name: '李四',
  //       avatar: 'avatars:svg-12'
  //     },
  //     dueDate: new Date()
  //   }]
  // }];
  projectId$: Observable<string>;
  lists$: Observable<TaskList[]>;
  constructor(
    private dialog: MatDialog,
    private store$: Store<fromRoot.State>,
    private route: ActivatedRoute,
  ) {
    // this.projectId$ = this.route.paramMap.pipe(
    //   switchMap(params => of(params.get('id')))
    // );
    this.projectId$ = this.route.paramMap.pipe(
      map(p => p.get('id'))
    );
    this.lists$ = this.store$.pipe(select(fromRoot.getTasksByLists));
  }

  ngOnInit() {
  }

  launchNewTaskDialog(list: TaskList) {
    const user$ = this.store$.pipe(select(fromRoot.getAuthState));
    user$.pipe(take(1), map(auth => auth.user)).subscribe(user => {
      const dialogRef = this.dialog.open(NewTaskComponent, {data: {owner: user}});
      dialogRef.afterClosed().pipe(
        take(1),
        filter(n => n)
      ).subscribe(val => {
        this.store$.dispatch(taskActions.add({payload: {...val, taskListId: list.id, completed: false, createDate: new Date()}}))
      })
    });
  }

  launchCopyTaskDialog(list) {
    const list$ = this.lists$.pipe(map(l => l.filter(n => n.id !== list.id)));
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {srcListId: list.id, lists: list$}});
    dialogRef.afterClosed().pipe(
      take(1),
      filter(n => n)
    ).subscribe(val => {
      this.store$.dispatch(taskActions.moveAll({payload: val}));
    })
  }

  launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, { data: {
      task
    }});
    dialogRef.afterClosed().pipe(
      take(1),
      filter(n => n)
    ).subscribe(val => {
      this.store$.dispatch(taskActions.update({payload: {...task, ...val}}))
    })
  }

  launchConfirmDialog(list: TaskList) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {
      title: "删除列表:",
      content: "您确认删除该列表吗?"
    }});
    dialogRef.afterClosed().pipe(
      take(1),
      filter(n => n)
    ).subscribe(result => {
      this.store$.dispatch(actions.deleteTaskList({payload: list}));
    });
  }

  launchEditListDialog(list: TaskList) {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {
      title: "更改列表名称:",
      name: list.name
    }});
    dialogRef.afterClosed().pipe(
      take(1)
    ).subscribe(result => {
      this.store$.dispatch(actions.update({payload: {...result, id: list.id}}))
    });
  }

  launchNewListDialog(ev: Event) {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {
      title: "新建列表:"
    }});
    dialogRef.afterClosed().pipe(
      take(1),
      withLatestFrom(this.projectId$, (val, projectId) => ({
        ...val,
        projectId
      }))
    ).subscribe(result => {
      this.store$.dispatch(actions.add({payload: result}));
    });
  }

  handleMove(srcData, list) {
    switch (srcData.tag) {
      case 'task-item':
        console.log('handling item');
        break;
      case 'task-list':
        console.log('handling list');
        const srcList = srcData.data;
        const tempOrder = srcList.order;
        srcList.order = list.order;
        list.order = tempOrder;
        break;
      default:
        break;
    }
  }

  handleQuickTask(desc: string, list) {
    const user$ = this.store$.pipe(select(fromRoot.getAuthState));
    user$.pipe(take(1), map(auth => auth.user)).subscribe(user => {
      this.store$.dispatch(taskActions.add({payload: {
        desc: desc,
        priority: 3,
        taskListId: list.id,
        ownerId: user.id,
        completed: false,
        createDate: new Date(),
        participantIds: []
      }}))
    })
  }
}
