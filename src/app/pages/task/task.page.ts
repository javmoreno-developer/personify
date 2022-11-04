import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { TaskService } from 'src/app/core/services/task.service';
import { Task } from 'src/app/core/models/task';

import { TaskDetailComponent } from '../../core/components/task-detail/task-detail.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  list: Task[];
  constructor(private taskService : TaskService,private modal : ModalController,private alert:AlertController) { }

  ngOnInit() {}

  getTask() {
    return this.taskService._task$;
  }

  onNewTask() {
    this.presentTaskForm(null);
  }

  async presentTaskForm(task:Task){
    const modal = await this.modal.create({
      component: TaskDetailComponent,
      componentProps:{
        task:task
      }
    });
    modal.present();

    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.taskService.addTask(result.data.task);
            break;
          case 'Edit':
            //this.personService.updatePerson(result.data.person);
            //alert("edit");
            this.taskService.updateTask(result.data.task);
            break;
          default:
        }
      }
    });
  }

  onEditTask(param : Task) {
    this.presentTaskForm(param);
  }

  onDeleteTask(param : Task) {
    this.onDeleteAlert(param);
  }

  async onDeleteAlert(param){
    const alert = await this.alert.create({
      header: '¿Está seguro de que desear borrar a la tarea?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler: () => {
            this.taskService.deleteTask(param.id);
            this.list = this.taskService.getAllTask();
          },
        },
      ],
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

}
