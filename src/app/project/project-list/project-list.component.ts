import {
  Component,
  OnInit,
  HostBinding,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy
} from '@angular/core';
import { Store, select } from "@ngrx/store";
import * as fromRoot from '../../reducers';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from "../invite/invite.component";
import { ConfirmDialogComponent } from "../../shared/confirm-dialog/confirm-dialog.component";
import { slideToRight } from "../../anims/router.anim";
import { listAnimation } from "../../anims/list.anim";
import { Project } from 'src/app/domain';
import * as _ from 'lodash';
import { filter, switchMap, map, take } from "rxjs/operators";
import { Observable } from "rxjs";
import * as actions from "../../actions";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [ slideToRight, listAnimation ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit, OnDestroy {

  @HostBinding('@routeAnim') state;

  projects$: Observable<Project[]>;
  listAnim$: Observable<number>;
  constructor(
    private dialog: MatDialog,
    private cd: ChangeDetectorRef,
    private store$: Store<fromRoot.State>
  ) {
    this.store$.dispatch(actions.load({payload: null}));
    this.projects$ = this.store$.pipe(select(fromRoot.getProjects));
    this.listAnim$ = this.projects$.pipe(map(p => p.length));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  openNewProjectDialog() {
    const selectedImg = `/assets/img/covers/${Math.floor(Math.random() * 40)}_tn.jpg`
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {
      thumbnails: this.getThumbnails(),
      img: selectedImg
    }});
    dialogRef.afterClosed().pipe(
      take(1),//只取一个值，然后自动销毁，这样就不用写unsubsrcribe了
      filter(n => n),
      map(val => ({...val, coverImg: this.buildImgSrc(val.coverImg)})),
    ).subscribe(p => {
      this.store$.dispatch(actions.add({payload: p}));
    });
  }

  launchInviteDialog(project: Project) {
    this.store$.pipe(select(fromRoot.getProjectUsers(project.id))).pipe(
      map(users => this.dialog.open(InviteComponent, {data: { members: users}})),
      switchMap(dialogRef => dialogRef.afterClosed().pipe(
        take(1),
        filter(n => n),
        map(val => this.store$.dispatch(actions.invite({payload: {projectId: project.id, members: val}})))
      ))
    )
  }

  launchUpdateDialog(project: Project) {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {
      thumbnails: this.getThumbnails(),
      project
    }});
    dialogRef.afterClosed().pipe(
      take(1),
      filter(n => n),
      map(val => ({...val, id:project.id, coverImg: this.buildImgSrc(val.coverImg)})),
    ).subscribe(p => {
      this.store$.dispatch(actions.update({payload: p}));
    });
  }

  launchConfirmDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {
      title: "删除项目:",
      content: "您确认删除该项目吗?"
    }});
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    //   this.projects = this.projects.filter(p => p.id !== project.id);
    //   this.cd.markForCheck();
    // });
    dialogRef.afterClosed().pipe(
      take(1),
      filter(n => n),
    ).subscribe(_ => {
      this.store$.dispatch(actions.deleteProject({payload: project}));
    });
  }

  private getThumbnails() {
    return _.range(0, 39).map(i => `/assets/img/covers/${i}_tn.jpg`);
  }

  private buildImgSrc(img: string): string{
    return img.indexOf("_") > -1 ? img.split("_")[0]+'.jpg': img;
  }

  selectProject(project: Project) {
    this.store$.dispatch(actions.select({payload: project}));
  }
}
