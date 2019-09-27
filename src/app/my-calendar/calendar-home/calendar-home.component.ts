import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { ActivatedRoute } from '@angular/router';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { TaskService } from "../../services/task.service";
import { Store, select } from '@ngrx/store';
import * as fromRoot from "../../reducers";
import { startOfDay, endOfDay } from "date-fns";

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

const getColor = (priority: number) => {
  switch (priority) {
    case 1:
      return colors.red;
    case 2:
      return colors.blue;
    default:
      return colors.yellow;
  }
}

@Component({
  selector: 'app-calendar-home',
  template: `
    <mat-card>
      <div class="toolbar">
        <button mat-icon-button mwlCalendarPreviousView [view]="view$ | async" [(viewDate)]="viewDate">
          <mat-icon>chevron_left</mat-icon>
        </button>
        <button mat-button mwlCalendarToday>
          {{viewDate | date: 'yyyy-MM-dd'}}
        </button>
        <button mat-icon-button mwlCalendarNextView [view]="view$ | async" [(viewDate)]="viewDate">
          <mat-icon>chevron_right</mat-icon>
        </button>
      </div>
      <ng-container *ngIf="(events$ | async) as calEvents">
        <div [ngSwitch]="view$ | async">
          <mwl-calendar-week-view *ngSwitchCase="'week'"
            [viewDate]="viewDate"
            [events]="calEvents">

          </mwl-calendar-week-view>
          <mwl-calendar-day-view *ngSwitchCase="'day'"
            [viewDate]="viewDate"
            [events]="calEvents">

          </mwl-calendar-day-view>
          <mwl-calendar-month-view *ngSwitchDefault
            [viewDate]="viewDate"
            [events]="calEvents">

          </mwl-calendar-month-view>
        </div>
      </ng-container>
    </mat-card>
  `,
  styles: [`
    .toolbar{
      display: flex;
      flex-direction: row;
    }
    :host {
      width: 100%;
      height: 100%;
    }
  `]
})
export class CalendarHomeComponent implements OnInit {

  viewDate: Date;
  view$: Observable<string>;
  events$: Observable<CalendarEvent[]>;
  constructor(
    private route: ActivatedRoute,
    private store$: Store<fromRoot.State>,
    private service$: TaskService
  ) {
    this.viewDate = new Date();
    this.view$ = this.route.paramMap.pipe(map(p => p.get('view')));
    this.events$ = this.store$.pipe(select(fromRoot.getAuthState)).pipe(
      map(auth => auth.user.id),
      switchMap(userId => this.service$.getUserTasks(userId)),
      map(tasks => tasks.map(task => ({
        start: startOfDay(task.createDate),
        end: endOfDay(task.dueDate),
        title: task.desc,
        color: getColor(task.priority)
      })))
    )
  }

  ngOnInit() {
  }

}
