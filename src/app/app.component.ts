import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Person', url: '/person', icon: 'person' },
    { title: 'Task', url: '/task', icon: 'clipboard' },
    { title: 'Assign', url: '/assign', icon: 'bookmark' },
    { title: 'home', url: '/home', icon: 'home' },
    
  ];
  //public labels = [''];
  constructor() {}
}
