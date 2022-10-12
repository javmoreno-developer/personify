import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {
  
  list: Person[];
  items: Person[] = [];
  numTimesLeft = 4;  
  pointer = 0;

  

  constructor(private personService : PersonService) { }

  

  ngOnInit() {
    this.getPeople();
    this.addMoreItems();
  }

  loadData(event) {  
    setTimeout(() => {  
      this.addMoreItems();  
      this.numTimesLeft -= 1;  
      event.target.complete();  
    }, 500);  
  }  
  addMoreItems() {  
    for (let i = this.pointer; i <= (this.pointer+9); i++) {  
      this.items.push(this.list[i]);  
    }
    this.pointer += 10;
  }  

  getPeople() {
    this.list = this.personService.getAllPeople();
  }

}
