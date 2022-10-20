import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskPageRoutingModule } from './task-routing.module';

import { TaskPage } from './task.page';
import { TaskCardComponent } from '../components/task-card/task-card.component';
import { TaskDetailComponent } from '../components/task-detail/task-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TaskPageRoutingModule
  ],
  declarations: [TaskPage,TaskCardComponent,TaskDetailComponent]
})
export class TaskPageModule {}
