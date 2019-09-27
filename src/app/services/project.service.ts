import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Project, User } from '../domain';
import { Observable, from } from "rxjs";
import { map, mapTo, mergeMap, count, switchMap } from "rxjs/operators";
import * as _ from 'lodash';

@Injectable()
export class ProjectService {
  private readonly domain = 'projects';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient, @Inject('BASE_CONFIG') private config) { }
  // POST
  add(project: Project): Observable<Project>{
    project.id = null;
    const uri = `${this.config.uri}/${this.domain}`;
    return this.http
      .post(uri, JSON.stringify(project), {headers: this.headers})
      .pipe(map( res => res as Project));
  }

  // PUT
  update(project: Project): Observable<Project>{
    const uri = `${this.config.uri}/${this.domain}/${project.id}`;
    const toUpdate = {
      name: project.name,
      desc: project.desc,
      coverImg: project.coverImg
    };
    return this.http
      .patch(uri, JSON.stringify(toUpdate), {headers: this.headers})
      .pipe(map(res => res as Project));
  }

  // DELETE
  delete(project: Project): Observable<Project>{
    const delTasks$ = from(project.taskLists?project.taskLists:[]).pipe(
      mergeMap(listId => this.http.delete(`${this.config.uri}/tasklists/${listId}`))
      , count()
    )
    return delTasks$.pipe(
      switchMap(_ => this.http.delete(`${this.config.uri}/${this.domain}/${project.id}`))
      , mapTo(project)
    )
  }

  // GET
  get(userId: string): Observable<Project[]>{
    const uri = `${this.config.uri}/${this.domain}`;
    return this.http
      .get(uri, {params: {'members_like': userId}})
      .pipe(map( res => res as Project[]));
  }

  invite(projectId: String, users: User[]): Observable<Project>{
    const uri = `${this.config.uri}/${this.domain}/${projectId}`;
    
    return this.http
      .get(uri).pipe(
        switchMap((project: Project) => {
          const existingMembers = project.members;
          const invitedIds = users.map(user => user.id);
          const newIds = _.union(existingMembers, invitedIds);
          return this.http
            .patch(uri, JSON.stringify({members: newIds}), {headers: this.headers})
            .pipe(map(res => res as Project))
        })
      )
  }
}