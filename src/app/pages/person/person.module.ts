import { NgModule } from '@angular/core';


import { IonicModule } from '@ionic/angular';

import { PersonPageRoutingModule } from './person-routing.module';

import { PersonPage } from './person.page';


import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
   
    CoreModule,
    
    PersonPageRoutingModule
  ],
  declarations: [PersonPage]
})
export class PersonPageModule {}
