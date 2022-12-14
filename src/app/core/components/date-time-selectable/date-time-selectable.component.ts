import { AfterViewInit, ChangeDetectorRef, Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup, IonDatetime } from '@ionic/angular';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';


export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateTimeSelectableComponent),
  multi: true
};

@Component({
  selector: 'app-date-time-selectable',
  templateUrl: './date-time-selectable.component.html',
  styleUrls: ['./date-time-selectable.component.scss'],
  providers:[USER_PROFILE_VALUE_ACCESSOR]
})
export class DateTimeSelectableComponent implements OnInit,ControlValueAccessor {

  propagateChange = (_: any) => { }
  isDisabled:boolean = false;
  selectedDateTime = "";

  private dateTimeSubject = new BehaviorSubject(this.formatDate(moment()));
  public dateTime$ = this.dateTimeSubject.asObservable();


  constructor(private cd: ChangeDetectorRef) { }
 

  writeValue(obj: any): void {
    this.selectedDateTime = obj;
    if(this.selectedDateTime) {
      //this.dateTimeSubject.next(this.formatDate(moment(this.selectedDateTime)));
      this.dateTimeSubject.next(this.formatDate(moment(obj)));
      this.cd.detectChanges();
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  formatDate(date:moment.Moment) {
    return date.format("YYYY-MM-DDTHH:mmZ");
  }

  ngOnInit() {}

  closeAccordion(accordion:IonAccordionGroup) {
    accordion.value='';
  }

  onChangeDate(event, accordion) {
    setTimeout(()=> {
      this.selectedDateTime = event.detail.value;
      this.closeAccordion(accordion);
      this.propagateChange(this.selectedDateTime);
      this.cd.detectChanges();
    },100);
    
   }

  updateDate(dateTime:IonDatetime, accordion:IonAccordionGroup) {
    dateTime.confirm();
    this.cd.detectChanges();
  }

}
