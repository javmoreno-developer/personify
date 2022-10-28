import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignPageRoutingModule } from './assign-routing.module';

import { AssignPage } from './assign.page';
import { AssignmentCardComponent } from '../../core/components/assignment-card/assignment-card.component';
import { AssignmentDetailComponent } from '../../core/components/assignment-detail/assignment-detail.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    AssignPageRoutingModule
  ],
  declarations: [AssignPage]
})
export class AssignPageModule {}
