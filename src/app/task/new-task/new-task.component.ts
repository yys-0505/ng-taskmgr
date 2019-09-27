import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTaskComponent implements OnInit {
  title = "";
  priorities = [{
    label: '紧急',
    value: 1
  }, {
    label: '重要',
    value: 2
  }, {
    label: '普通',
    value: 3
  }];

  form: FormGroup;
  dialogTitle: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewTaskComponent>,
  ) { }

  ngOnInit() {
    if (!this.data.task) {
      this.form = this.fb.group({
        desc: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
        priority: [3],
        owner: [[this.data.owner]],
        followers: [[]],
        dueDate: [],
        reminder: [],
        remark: ['', Validators.maxLength(40)]
      });
      this.dialogTitle = '创建任务：';
    } else {
      this.form = this.fb.group({
        desc: [this.data.task.desc, Validators.compose([Validators.required, Validators.maxLength(30)])],
        priority: [this.data.task.priority],
        owner: [this.data.task.owner ? [{name: this.data.task.owner.name, value: this.data.task.owner.id}] : []],
        followers: [this.data.task.participants ? [...this.data.task.participants]: []],
        dueDate: [this.data.task.dueDate],
        reminder: [this.data.task.reminder],
        remark: [this.data.task.remark, Validators.maxLength(40)]
      });
      this.dialogTitle = '修改任务：';
    }
  }

  onSubmit(ev: Event, {value, valid}){
    ev.preventDefault();
    if (!valid) {
      return;
    }
    this.dialogRef.close({
      ...value,
      ownerId: value.owner.length > 0 ? value.owner[0].id : null,
      participantIds: value.followers.map(f => f.id),
    });
  }
}
