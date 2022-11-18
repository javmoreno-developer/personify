import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';
import { Assignment } from 'src/app/core/models/assignment';
import { AssignmentService } from 'src/app/core/services/assignment.service';
import { AssignmentDetailComponent } from '../../core/components/assignment-detail/assignment-detail.component';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.page.html',
  styleUrls: ['./assign.page.scss'],
})
export class AssignPage implements OnInit {

  lista : Assignment[];
  constructor( private assignSvc: AssignmentService,private alert:AlertController,private modal:ModalController,private translate: TranslateService) {}

  ngOnInit() {
  }

  onDeleteAssign(event) {
    this.onDeleteAlert(event);
  }

  getAssign() {
    return this.assignSvc._assign$;
  }

  async onDeleteAlert(param){
    const alert = await this.alert.create({
      header: await lastValueFrom(this.translate.get('modal_delete.assign_header')),
      buttons: [
        {
          text: await lastValueFrom(this.translate.get('modal_delete.cancell')),
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: await lastValueFrom(this.translate.get('modal_delete.acept')),
          role: 'confirm',
          handler: () => {
            
            this.assignSvc.deleteById(param);
            this.lista = this.assignSvc.getAllAssigns();
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onEditAssign(event) {
    this.presentAssignForm(event);
  }

  async presentAssignForm(assign:Assignment) {
    const modal = await this.modal.create({
      component:AssignmentDetailComponent,
      componentProps:{
        assign:assign
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.assignSvc.createAssign(result.data.assign);
            break;
          case 'Edit':
            this.assignSvc.updateAssign(result.data.assign);
            this.lista = this.assignSvc.getAllAssigns();
          
            break;
            

          default:
        }
        //this.cdr.detectChanges();
      }
    });
  }

  onCreate() {
    this.presentAssignForm(null);
  }
}
