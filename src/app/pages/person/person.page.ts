import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Person } from 'src/app/core/models/person';

//import { OverlayEventDetail } from '@ionic/core/components';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonDetailComponent } from '../../core/components/person-detail/person-detail.component';
import { AssignmentService, PersonService } from 'src/app/core/services';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';



@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {
 // @ViewChild(IonModal) modal: IonModal;
  
  list: Person[];
  items: Person[] = [];
  numTimesLeft = 4;  
  pointer = 0;

  /*get list() {
    return this.personService.getAllPeople();
  }*/
  
  nameEdit : string;

  constructor(private personService : PersonService,private fb : FormBuilder, private modal:ModalController,private assignService: AssignmentService, private alert:AlertController,private toastController : ToastController, private translate: TranslateService) {

  }


  

  ngOnInit() {
   
  }

  getPeople() {
    //return this.personService.getAllPeople();
    return this.personService._people$;
  }

  createPerson() {
    this.presentPersonForm(null);
  }
 
  editPerson(event) {
    this.presentPersonForm(event);
  }

  async presentPersonForm(person:Person){
    const modal = await this.modal.create({
      component:PersonDetailComponent,
      componentProps:{
        person:person
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
           
            this.personService.addPerson(result.data.person);
            break;
          case 'Edit':
            this.personService.updatePerson(result.data.person);
            break;
          default:
        }
      }
    });
  }

  
  //eliminar
  /*deletePerson(event) {
    this.personService.deletePerson(event.id);
    this.cdr.detectChanges();
  }*/

  deletePerson(event) {
    this.onDeleteAlert(event);
    
  }

  async onDeleteAlert(person){
    const alert = await this.alert.create({
      //await lastValueFrom(this.translate.get('assignment.edit'));
      //header: '¿Está seguro de que desear borrar a la persona?',
      header: await lastValueFrom(this.translate.get('modal_delete.header')),
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
            let r = this.assignService.getAllDateById(person.id);
            if(r.length == 0) {           
              this.personService.deletePerson(person.id);
            } else {
              this.presentToast("top");
            }
            this.list = this.personService.getAllPeople();
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

 
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: await lastValueFrom(this.translate.get('modal_delete.exception')),
      duration: 2500,
      position: position
    });

    await toast.present();
  }


}
