import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
})
export class PersonCardComponent implements OnInit {

  //paso de datos al componente person-card
  private _dataPerson : Person;
  
  @Input("dataPerson") set dataPerson(n : Person) {
    this._dataPerson = n;
  }

  get dataPerson() {
    return this._dataPerson;
  }


  constructor() { }

  ngOnInit() {}

}