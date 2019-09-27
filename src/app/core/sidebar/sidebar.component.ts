import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { getDate } from "date-fns";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { Project } from '../../domain/project.model';
import * as fromRoot from "../../reducers";
import * as actions from '../../actions/project.action'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() navClick = new EventEmitter<void>();
  today = 'day';
  projects$: Observable<Project[]>;
  constructor(
    private store$: Store<fromRoot.State>
  ) {
    this.projects$ = this.store$.pipe(select(fromRoot.getProjects))
  }

  ngOnInit() {
    this.today = `day${getDate(new Date())}`;
  }

  onNavClick() {
    this.navClick.emit();
  }

  onPrjClick(prj: Project) {
    this.store$.dispatch(actions.select({payload: prj}));
    this.navClick.emit();
  }
}
