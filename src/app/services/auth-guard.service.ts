import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, defaultIfEmpty, tap } from "rxjs/operators";
import { Router } from '@angular/router';
import { Store, Action } from "@ngrx/store";
import * as fromRoot from "../reducers";
import { getAuthState } from "../reducers";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private store$: Store<fromRoot.State>,
    private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store$.select(getAuthState).pipe(
      map(auth => {
        const result = auth.token !== null && auth.token !== undefined;
        if (!result) {
          this.router.navigateByUrl('/login');
        }
        return result;
      })
      , defaultIfEmpty(false)
    );
  }
}
