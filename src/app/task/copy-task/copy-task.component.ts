import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { TaskList } from "../../domain/task-list.model";

@Component({
  selector: 'app-copy-task',
  templateUrl: './copy-task.component.html',
  styleUrls: ['./copy-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CopyTaskComponent implements OnInit {

  lists$: Observable<TaskList>;
  form: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<CopyTaskComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.lists$ = this.data.lists;
    this.form = this.fb.group({
      targetListId: ['']
    });
  }

  onSubmit(ev: Event, {value, valid}) {
    ev.preventDefault();
    if (!valid) {
      return;
    }
    this.dialogRef.close({srcListId: this.data.srcListId, targetListId: value.targetListId});
  }
}
