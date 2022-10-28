import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { PersonService } from 'src/app/core/services/person.service';
import { TaskService } from 'src/app/core/services/task.service';
import { Assignment } from 'src/app/core/models/assignment';




@Component({
  selector: 'app-assignment-card',
  templateUrl: './assignment-card.component.html',
  styleUrls: ['./assignment-card.component.scss'],
})
export class AssignmentCardComponent implements OnInit {

  _assign : Assignment;
  taskUrl : string;
  personUrl: string;

  @Input("assign") set assign(n : Assignment) {
    this._assign = n;
  }


  getPersonUrl() {
      return this.personSvc.selectById(this._assign.personId);
  }

  getTaskUrl() {
    return this.taskSvc.selectById(this._assign.taskId);
  }


  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  get assign() {
    return this._assign;
  }

  

  constructor(private taskSvc : TaskService,private personSvc : PersonService) {}

  ngOnInit() {}


  promptDelete() {
    this.onDelete.next(this._assign.id);
  }

  promptEdit() {
    this.onEdit.next(this._assign);
  }

}
