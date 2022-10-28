import { Component, Input, OnInit } from '@angular/core';
import { Assignment, Person } from '../../models';
import * as moment from 'moment';

@Component({
  selector: 'app-date-list',
  templateUrl: './date-list.component.html',
  styleUrls: ['./date-list.component.scss'],
})
export class DateListComponent implements OnInit {

  _person: Assignment;

  momentjs:any = moment;

  @Input("person") set person(n: Assignment) {
    this._person = n;
    console.log(this._person);
  } 

  get person() {
    return this._person;
  }

  constructor() { }

  ngOnInit() {}

}
