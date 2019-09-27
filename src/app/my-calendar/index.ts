import { NgModule } from '@angular/core';
import { CalendarHomeComponent } from './calendar-home/calendar-home.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MyCalendarRoutingModule } from "./my-calendar-routing.module";
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [CalendarHomeComponent],
  imports: [
    SharedModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    MyCalendarRoutingModule
  ]
})
export class MyCalendarModule { }
