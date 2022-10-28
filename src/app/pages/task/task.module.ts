import { NgModule } from '@angular/core';
import { TaskPageRoutingModule } from './task-routing.module';
import { TaskPage } from './task.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    TaskPageRoutingModule
  ],
  declarations: [TaskPage]
})
export class TaskPageModule {}
