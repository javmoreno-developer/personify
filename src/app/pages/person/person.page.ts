import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
//import { OverlayEventDetail } from '@ionic/core/components';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonDetailComponent } from '../components/person-detail/person-detail.component';


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

  constructor(private personService : PersonService,private fb : FormBuilder, private modal:ModalController,private cdr:ChangeDetectorRef, private alert:AlertController) {}


  

  ngOnInit() {
   this.list = this.personService.getAllPeople();
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
      header: '¿Está seguro de que desear borrar a la persona?',
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
            this.personService.deletePerson(person.id);
            this.list = this.personService.getAllPeople();
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  

}
