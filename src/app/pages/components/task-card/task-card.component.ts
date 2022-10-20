import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task';


@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {

  _task : Task;

  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  
  
  @Input("task") set task(n: Task) {
    this._task = n;
  }

  get task () {
    return this._task;
  }

  constructor() { }

  ngOnInit() {}

  onEditTask() {
    this.onEdit.next(this._task);
  }

  onDeleteTask() {
    this.onDelete.next(this._task);
  }

}
