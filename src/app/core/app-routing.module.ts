import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from "../services/auth-guard.service";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  // { path: 'projects', redirectTo: '/projects', pathMatch: 'full'},
  // { path: 'tasklists', redirectTo: '/tasklists', pathMatch: 'full'},
  {
    path: 'projects',
    loadChildren: '../project#ProjectModule',
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'tasklists/:id',
    loadChildren: '../task#TaskModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'mycal/:view',
    loadChildren: '../my-calendar#MyCalendarModule',
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
