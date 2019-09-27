import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User, Auth } from '../domain';
import { Observable, from } from "rxjs";
import { map, mapTo, mergeMap, count, switchMap } from "rxjs/operators";

@Injectable()
export class AuthService {
  private readonly domain = 'users';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
    '.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9' +
    '.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';
  constructor(private http: HttpClient, @Inject('BASE_CONFIG') private config) { }
  // 注册
  register(user: User): Observable<Auth>{
    user.id = null;
    const uri = `${this.config.uri}/${this.domain}`;
    return this.http
      .get(uri, {params: {'email': user.email}}).pipe(
        switchMap(res => {
          if(Object.keys(res).length > 0){
            throw 'user existed';
          }
          return this.http
            .post(uri, JSON.stringify(user), {headers: this.headers})
            .pipe(
              map(r => ({token: this.token, user: r} as Auth))
            );
        })
      )
  }

  // 登录
  login(username: string, password: string): Observable<Auth>{
    const uri = `${this.config.uri}/${this.domain}`;
    return this.http
      .get(uri, {params: {'email':username, 'password': password}})
      .pipe(map(res => {
        if (Object.keys(res).length === 0) {
          throw 'username or password not match'
        }
        
        return {
          token: this.token,
          user: res[0]
        }
      }));
  }
}