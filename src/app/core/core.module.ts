import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { AssignmentCardComponent } from './components/assignment-card/assignment-card.component';
import { AssignmentDetailComponent } from './components/assignment-detail/assignment-detail.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { DateListComponent } from './components/date-list/date-list.component';
import { PersonSelectableComponent } from './components/person-selectable/person-selectable.component';




@NgModule({
  declarations: [
    PersonCardComponent,
    PersonDetailComponent,
    AssignmentCardComponent,
    AssignmentDetailComponent,
    TaskCardComponent,
    TaskDetailComponent,
    DateListComponent,
    PersonSelectableComponent,
    
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [
    PersonCardComponent,
    PersonDetailComponent,
    CommonModule,
    FormsModule,
    AssignmentDetailComponent,
    AssignmentCardComponent,
    IonicModule,
    TaskCardComponent,
    TaskDetailComponent,
    ReactiveFormsModule,
    DateListComponent,
    PersonSelectableComponent,
    
  ],
})
export class CoreModule { }
