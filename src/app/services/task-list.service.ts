import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TaskList } from '../domain';
import { Observable, concat } from "rxjs";
import { map, mapTo, reduce } from "rxjs/operators";

@Injectable()
export class TaskListService {
  private readonly domain = 'taskLists';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient, @Inject('BASE_CONFIG') private config) { }
  // POST
  add(tasklist: TaskList): Observable<TaskList>{
    const uri = `${this.config.uri}/${this.domain}`;
    return this.http
      .post(uri, JSON.stringify(tasklist), {headers: this.headers})
      .pipe(map( res => res as TaskList));
  }

  // PUT
  update(tasklist: TaskList): Observable<TaskList>{
    const uri = `${this.config.uri}/${this.domain}/${tasklist.id}`;
    const toUpdate = {
      name: tasklist.name
    };
    return this.http
      .patch(uri, JSON.stringify(toUpdate), {headers: this.headers})
      .pipe(map(res => res as TaskList));
  }

  // DELETE
  delete(tasklist: TaskList): Observable<TaskList>{
    const uri = `${this.config.uri}/${this.domain}/${tasklist.id}`;
    return this.http.delete(uri).pipe(mapTo(tasklist));
  }

  // GET
  get(projectId: string): Observable<TaskList[]>{
    const uri = `${this.config.uri}/${this.domain}`;
    return this.http
      .get(uri, {params: {'projectId': projectId}})
      .pipe(map( res => res as TaskList[]));
  }

  // PATCH
  swapOrder(src: TaskList, target: TaskList): Observable<TaskList[]> {
    const dragUri = `${this.config.uri}/${this.domain}/${src.id}`;
    const dropUri = `${this.config.uri}/${this.domain}/${target.id}`;
    const drag$ = this.http
      .patch(dragUri, JSON.stringify({order: target.order}), {headers: this.headers});
    const drop$ = this.http
      .patch(dropUri, JSON.stringify({order: src.order}), {headers: this.headers});
    return concat(drag$, drop$).pipe(
      reduce((arrs, list) => [...arrs, list], [])
    )
  }
}