import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { Task } from '../../models';
import { TaskService } from '../../services';


export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TaskSelectableComponent),
  multi: true
};

@Component({
  selector: 'app-task-selectable',
  templateUrl: './task-selectable.component.html',
  styleUrls: ['./task-selectable.component.scss'],
  providers:[USER_PROFILE_VALUE_ACCESSOR]
})
export class TaskSelectableComponent implements OnInit,ControlValueAccessor {

  selectedTask: Task = null;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;
  
  constructor(private TaskSvc: TaskService) { }

  writeValue(obj: any): void {
    this.selectedTask = this.TaskSvc.getTaskById(obj);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit() {}

  getPeople(){
    return this.TaskSvc.getAllTask();
  } 

  onPersonClicked(task:Task, accordion:IonAccordionGroup){
    this.selectedTask = task;
    accordion.value='';
    this.propagateChange(this.selectedTask.id);
  }

}