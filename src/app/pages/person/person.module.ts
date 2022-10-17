import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonPageRoutingModule } from './person-routing.module';

import { PersonPage } from './person.page';
import { PersonCardComponent } from 'src/app/pages/components/person-card/person-card.component';
import { PersonDetailComponent } from '../components/person-detail/person-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PersonPageRoutingModule
  ],
  declarations: [PersonPage,PersonCardComponent,PersonDetailComponent]
})
export class PersonPageModule {}
