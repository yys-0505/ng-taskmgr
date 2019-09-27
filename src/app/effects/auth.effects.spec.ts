import { TestBed, fakeAsync } from '@angular/core/testing';
import { AuthEffects } from './auth.effects';
import { AuthService } from "../services/auth.service";
import * as actions from "../actions/auth.action";
import { provideMockActions } from "@ngrx/effects/testing";
import { Observable } from "rxjs";
import { Action } from '@ngrx/store';
import { of } from "rxjs";
import { Router } from "@angular/router";

describe('测试 AuthEffects', () => {
  let effects: AuthEffects;
  let actions$: Observable<Action>;
  const routerSpy = jasmine.createSpyObj('Router', ['']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        {
          provide: AuthService,
          useValue: jasmine.createSpyObj('authService', ['login', 'register'])
        },
        { provide: Router,  useValue: routerSpy }
      ]
    });

    effects = TestBed.get( AuthEffects );
    actions$ = of(actions.login);
  });

  it('登录成功发送 LoginSuccessAction', fakeAsync(() => {
    const auth = {
      token: '',
      user: { id: '123abc', name: 'yin', email: 'yy@163.com'}
    };
    const authService = TestBed.get(AuthService);
    authService.login.and.returnValue(of(auth));
    const expectedResult = actions.loginSuccess(auth);
    effects.login$.subscribe(action =>
      expect(action).toEqual(expectedResult)
    );
  }));
});
