import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

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
import { TaskSelectableComponent } from './components/task-selectable/task-selectable.component';
import { DateTimeSelectableComponent } from './components/date-time-selectable/date-time-selectable.component';
import es from "@angular/common/locales/es";
import en from "@angular/common/locales/en";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { createTranslateLoader } from './utils/translate';


registerLocaleData(es);
registerLocaleData(en);

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
    TaskSelectableComponent,
    DateTimeSelectableComponent,
      
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
    
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
    TaskSelectableComponent,
    DateTimeSelectableComponent,
    HttpClientModule,
    
    
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ]
})
export class CoreModule { }
