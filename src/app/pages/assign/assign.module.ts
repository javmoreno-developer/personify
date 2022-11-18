import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignPageRoutingModule } from './assign-routing.module';

import { AssignPage } from './assign.page';
import { AssignmentCardComponent } from '../../core/components/assignment-card/assignment-card.component';
import { AssignmentDetailComponent } from '../../core/components/assignment-detail/assignment-detail.component';
import { CoreModule } from 'src/app/core/core.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/core/utils/translate';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CoreModule,
    AssignPageRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [AssignPage]
})
export class AssignPageModule {}
