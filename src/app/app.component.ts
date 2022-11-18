import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  count: number = 0;
  public appPages = [
    { title: 'Person', url: '/person', icon: 'person' },
    { title: 'Task', url: '/task', icon: 'clipboard' },
    { title: 'Assign', url: '/assign', icon: 'bookmark' },
    { title: 'Home', url: '/home', icon: 'home' },
    
  ];
  //public labels = [''];
  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang("es");
  }

  changeIdiom() {
    if(this.count % 2 == 0) {
      this.translate.setDefaultLang("en");
    } else {
      this.translate.setDefaultLang("es");
    }
    this.count++;
  }

}
