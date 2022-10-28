import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonDatetime, ModalController, ToastController } from '@ionic/angular';
import { Assignment } from 'src/app/core/models/assignment';
import * as moment from 'moment';
import { AssignmentService, PersonService, TaskService } from '../../services';
import { Person, Task } from '../../models';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss'],
})
export class AssignmentDetailComponent implements OnInit, AfterViewInit {

  @ViewChild("dateTime") dateTime: IonDatetime;
  momentjs:any = moment;

  form : FormGroup;
  mode:"New" | "Edit" = "New";

  allPerson : Person[];
  allTask : Task[];

  personIdSelect: number;
  taskIdSelect: number;
  
  datesPerson: any[];

  datesEmpty = true;

  @Input('assign') set assign(assign:Assignment){
    if(assign) {
      this.personIdSelect = assign.personId;
      this.taskIdSelect = assign.taskId;
      this.form.controls.id.setValue(assign.id);
      this.form.controls.dateTime.setValue(assign.dateTime);
      this.form.controls.personId.setValue(this.personIdSelect);
      this.form.controls.taskId.setValue(this.taskIdSelect);
      this.mode = "Edit";
    } else {
      this.form.controls.dateTime.setValue(this.momentjs().toISOString())
    }
  }

  chargePersonDate(param) {
  
    this.datesPerson = this.assignService.getAllDateById(parseInt(param.target.value));
    console.log(this.datesPerson);
    if(this.datesPerson.length > 0) {
      this.datesEmpty = false; 
    }
  }
  

  constructor(private modal:ModalController,private fb:FormBuilder,private personSvc: PersonService,private taskSvc: TaskService,private assignService: AssignmentService,private toastController : ToastController) {
    this.form = this.fb.group({
      id:[null],
      personId: [0],
      taskId: [null],
      dateTime: [""],
    });
    this.allPerson = this.personSvc.getAllPeople();
    this.allTask = this.taskSvc.getAllTask();
   }
  
  ngAfterViewInit(): void {
    if(this.dateTime) {
      this.dateTime.value = this.form.controls.dateTime.value;
    }
  }

  ngOnInit() {
    
  }

   onChangeDate(event) {
    this.form.controls.dateTime.setValue(event.detail.value);
   }
  onSubmit() {
    
    this.datesPerson = this.assignService.getAllDateById(parseInt(this.form.value.personId));

    console.log(this.form.value.dateTime)
    console.log(this.form.value);
    console.log(this.datesPerson);
    let valido = true;
    if(this.datesPerson) {
      this.datesPerson.forEach((x)=> {
        if(moment(this.form.value.dateTime).isBetween(moment(x.createdAt), moment(x.dateTime))) {
          valido = false;
        }
      });

      console.log(valido);
      if(valido) {
        this.modal.dismiss({assign: this.form.value, mode:this.mode}, 'ok');
      } else {
        this.presentToast("top");
      }
    } else {
      this.modal.dismiss({assign: this.form.value, mode:this.mode}, 'ok');
    }
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hora equivocada',
      duration: 2500,
      position: position
    });

    await toast.present();
  }
}

