import { Injectable } from '@angular/core';
import { Assignment } from '../models/assignment'
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  listado: Assignment[];
  id: number;
  private _assignSubject : BehaviorSubject<Assignment[]>;
  public _assign$;

  momentjs:any = moment;

  constructor() { 
    this.init();
    this.id = this.listado.length+1;
  }

  getAllAssigns() {
    return this.listado;
  }

  

  deleteById(param : number) {
    this.listado = this.listado.filter((x)=> {
      return x.id != param;
    });
    this._assignSubject.next(this.listado);
  }

  createAssign(param) {

    param.id = this.id;
    this.id++;
    param.createdAt = this.momentjs().toISOString();
    this.listado.push(param);
    this._assignSubject.next(this.listado);
  }
  updateAssign(param) {
 
    
    let local = this.listado.filter((x)=> x.id == param.id);
    
    
    local[0].dateTime = param.dateTime;
    local[0].personId = param.personId;
    local[0].taskId = param.taskId;
    this._assignSubject.next(this.listado);
  }

  getAllDateById(param : number) : any[] { 


    let r = this.listado.filter((x)=> {
      return param === x.personId;
    });
   
    return r;
  }

  init() {
    this.listado= [
      {
        id: 1,
        taskId: 2,
        personId: 1,
        createdAt: this.momentjs().subtract("days",10).toISOString(),
        dateTime: this.momentjs().subtract("days",5).toISOString(),
      },
      {
        id: 2,
        taskId: 3,
        personId: 1,
        createdAt: this.momentjs().subtract("days",11).toISOString(),
        dateTime: this.momentjs().subtract("days",6).toISOString(),
      },
      {
        id: 3,
        taskId: 3,
        personId: 3,
        createdAt: this.momentjs().subtract("days",20).toISOString(),
        dateTime: this.momentjs().subtract("days",5).toISOString(),
      },
    ]

    this._assignSubject = new BehaviorSubject(this.listado);
    this._assign$ = this._assignSubject.asObservable();
  }
}
