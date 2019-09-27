import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromRoot from '../../reducers';
import { getAuthState } from "../../reducers";
import { Auth } from 'src/app/domain';
import * as actions from '../../actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>();

  auth$: Observable<Auth>;
  constructor(private store$: Store<fromRoot.State>) {
    this.auth$ = this.store$.pipe(select(getAuthState));
  }

  ngOnInit() {
  }

  openSidebar() {
    this.toggle.emit();
  }

  onChange(checked: boolean) {
    this.toggleDarkTheme.emit(checked);
  }

  logout() {
    this.store$.dispatch(actions.logout(null));
  }
}
