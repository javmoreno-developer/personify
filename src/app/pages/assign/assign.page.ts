import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
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
  constructor( private assignSvc: AssignmentService,private alert:AlertController,private modal:ModalController) {}

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
      header: '¿Está seguro de que desear borrar la relacion?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: 'Borrar',
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
