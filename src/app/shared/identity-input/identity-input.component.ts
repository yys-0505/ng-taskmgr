import { Component, OnInit, forwardRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormBuilder,
  FormGroup,
  FormControl,
} from "@angular/forms";
import { IdentityType, Identity } from 'src/app/domain';
import { Observable, Subject, combineLatest, Subscription } from "rxjs";

@Component({
  selector: 'app-identity-input',
  templateUrl: './identity-input.component.html',
  styleUrls: ['./identity-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IdentityInputComponent),
      multi: true //多对一
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => IdentityInputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdentityInputComponent implements OnInit, OnDestroy, ControlValueAccessor {

  identityTypes = [
    { value: IdentityType.IdCard, label: '身份证'},
    { value: IdentityType.Insurance, label: '医保'},
    { value: IdentityType.Passport, label: '护照'},
    { value: IdentityType.Militory, label: '军官证'},
    { value: IdentityType.Other, label: '其他'}
  ];
  identity: Identity = { identityType: null, identityNo: null };
  private _idType = new Subject<IdentityType>();
  private _idNo = new Subject<string>();
  private propagateChange = (_: any) => {};
  private sub: Subscription;
  constructor() { }

  ngOnInit() {
    const val$ = combineLatest(this._idType, this._idNo, (_type, _no) => {
      return {
        identityType: _type,
        identityNo: _no
      }
    });
    this.sub = val$.subscribe(id => {
      this.propagateChange(id);
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onIdTypeChange(idType: IdentityType) {
    this._idType.next(idType);
  }
  
  onIdNoChange(idNo: string) {
    this._idNo.next(idNo);
  }

  get idType(): Observable<IdentityType> {
    return this._idType.asObservable();
  }

  get idNo(): Observable<string> {
    return this._idNo.asObservable();
  }

  writeValue(obj: any): void {
    if (obj) {
      this.identity = obj;
    }
  }
    
  registerOnChange(fn: any): void{
    this.propagateChange = fn;
  }
  
  registerOnTouched(fn: any): void{ }

  validate(c: FormControl): {[key: string]: any} {
    const val = c.value;
    if (!val) {
      return null;
    }
    switch (val.identityType) {
      case IdentityType.IdCard:
        return this.validateIdCard(c);
      case IdentityType.Passport:
        return this.validatePassport(c);
      case IdentityType.Militory:
        return this.validateMilitory(c);
      case IdentityType.Insurance:
      default:
        return null;
    }
  }

  validateIdCard(c: FormControl): {[key: string]: any} {
    const val = c.value.identityNo;
    if (val.length !== 18) {
      return { idInvalid: true }
    }
    const pattern = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}[x0-9]$/;
    return pattern.test(val) ? null: { idInvalid: true };
  }

  validatePassport(c: FormControl): {[key: string]: any} {
    const val = c.value.identityNo;
    if (val.length !== 9) {
      return { idInvalid: true }
    }
    const pattern = /^[GgEe]\d{8}$/;
    return pattern.test(val) ? null: { idInvalid: true };
  }

  validateMilitory(c: FormControl): {[key: string]: any} {
    const val = c.value.identityNo;
    const pattern = /[\u4e00-\u9fa5](字第)(\d{4,8})(号?)$/;
    return pattern.test(val) ? null: { idInvalid: true };
  }
}
