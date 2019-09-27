import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Task, TaskList } from '../domain';
import { Observable, from } from "rxjs";
import { map, mapTo, mergeMap, reduce } from "rxjs/operators";

@Injectable()
export class TaskService {
  private readonly domain = 'tasks';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient, @Inject('BASE_CONFIG') private config) { }
  // POST
  add(task: Task): Observable<Task>{
    task.id = null;
    const uri = `${this.config.uri}/${this.domain}`;
    return this.http
      .post(uri, JSON.stringify(task), {headers: this.headers})
      .pipe(map( res => res as Task));
  }

  // PUT
  update(task: Task): Observable<Task>{
    const uri = `${this.config.uri}/${this.domain}/${task.id}`;
    const toUpdate = {
      desc: task.desc,
      priority: task.priority,
      dueDate: task.dueDate,
      reminder: task.reminder,
      ownerId: task.ownerId,
      participantIds: task.participantIds,
      remark: task.remark
    };
    return this.http
      .patch(uri, JSON.stringify(toUpdate), {headers: this.headers})
      .pipe(map(res => res as Task));
  }

  // DELETE
  delete(task: Task): Observable<Task>{
    const uri = `${this.config.uri}/${this.domain}/${task.id}`;
    return this.http.delete(uri).pipe(
      mapTo(task)
    );
  }

  // GET
  get(taskListId: string): Observable<Task[]>{
    const uri = `${this.config.uri}/${this.domain}`;
    return this.http
      .get(uri, {params: {'taskListId': taskListId}})
      .pipe(map( res => res as Task[]));
  }

  getByLists(lists: TaskList[]): Observable<Task[]> {
    return from(lists).pipe(
      mergeMap(list => this.get(list.id)),
      reduce((tasks: Task[], t: Task[]) => [...tasks, ...t], [])
    );
  }

  complete(task: Task): Observable<Task>{
    const uri = `${this.config.uri}/${this.domain}/${task.id}`;
    return this.http
      .patch(uri, JSON.stringify({complete: !task.completed}), {headers: this.headers})
      .pipe(map(res => res as Task));
  }

  move(taskId: string, taskListId: string): Observable<Task>{
    const uri = `${this.config.uri}/${this.domain}/${taskId}`;
    return this.http
      .patch(uri, JSON.stringify({taskListId: taskListId}), {headers: this.headers})
      .pipe(map(res => res as Task));
  }

  moveAll(srcListId: string, targetListId: string): Observable<Task[]>{
    return this.get(srcListId).pipe(
      mergeMap(tasks => from(tasks)),
      mergeMap(task => this.move(task.id, targetListId)),
      // reduce((arr:any, x) => arr.concat(x), [])
      reduce((arr:any, x) => [...arr, x], [])
    );
  }

  getUserTasks(userId: string): Observable<Task[]> {
    const uri = `${this.config.uri}/${this.domain}`;
    return this.http.get(uri, {params: {ownerId: userId}}).pipe(
      map(res => res as Task[])
    )
  }
}