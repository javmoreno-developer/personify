import { NgModule } from '@angular/core';


import { IonicModule } from '@ionic/angular';

import { PersonPageRoutingModule } from './person-routing.module';

import { PersonPage } from './person.page';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { CoreModule } from 'src/app/core/core.module';
import { createTranslateLoader } from 'src/app/core/utils/translate';

@NgModule({
  imports: [
    HttpClientModule,
    CoreModule,
    PersonPageRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [PersonPage]
})
export class PersonPageModule {}
