import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Quote } from 'src/app/domain/quote.model';
import { Observable } from "rxjs";
import { Store, select } from '@ngrx/store';
import * as fromRoot from "../../reducers";
import * as actions from '../../actions/quote.action';
import * as authActions from "../../actions/auth.action";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  quote$: Observable<Quote>;
  constructor(
    private fb: FormBuilder,
    private store$: Store<fromRoot.State>
  ) {
    // this.quote$ = this.store$.select(state => state.quote.quote); old
    // this.quote$ = this.store$.pipe(select('quote'), select('quote')); old
    this.quote$ = this.store$.pipe(select(fromRoot.getQuote));
    this.store$.dispatch(actions.quoteLoad(null));
  }

  ngOnInit() {
    // this.form = new FormGroup({
    //   email: new FormControl('yy@163.com', Validators.compose([Validators.required, Validators.email])),
    //   password: new FormControl('', Validators.required)
    // });
    /* 上面初始化可以写成以下形式, 没有new */
    this.form = this.fb.group({
      // email: ['yy@163.com', Validators.compose([Validators.required, Validators.email, this.validate])], //自定义校验器
      email: ['yy@163.com', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  onSubmit({value, valid}, ev: Event) {
    ev.preventDefault();
    // this.form.controls['email'].setValidators(this.validate);
    if (!valid) {
      return;
    }
    this.store$.dispatch(authActions.login(value));
  }

  validate(c: FormControl): {[key: string]: any} {
    if (!c.value) {
      return null; //null合法, 出错时返回对象
    }
    const pattern = /^yy+/;
    if (pattern.test(c.value)) {
      return null;
    }
    return {
      emailNotValid: 'The email must start with yy'
    }
  }
}
