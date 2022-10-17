import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
})
export class PersonDetailComponent implements OnInit {

  form: FormGroup;
  mode:"New" | "Edit" = "New";

  @Input('person') set person(person:Person){
    if(person){
      this.form.controls.id.setValue(person.id);
      this.form.controls.name.setValue(person.name);
      this.form.controls.description.setValue(person.description);
      this.form.controls.nickname.setValue(person.nickname);
      this.form.controls.url.setValue(person.url);
      this.form.controls.age.setValue(person.age);
      this.mode = "Edit";
    }
  }
  
  constructor(private fb:FormBuilder,
    private modal:ModalController) {
      this.form = this.fb.group({
        id:[null],
        name:['', [Validators.required]],
        description:['', [Validators.required]],
        age: ['', [Validators.required]],
        nickname:['', [Validators.required]],
        url:['', [Validators.required]]
      });
     }

  ngOnInit() {}

  onSubmit(){
    
    this.modal.dismiss({person: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

}
