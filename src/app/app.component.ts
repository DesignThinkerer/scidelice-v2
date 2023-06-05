import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Profile', url: '/folder/profile', icon: 'person' },
    { title: 'How', url: '/folder/how', icon: 'flask' },
    { title: 'Why', url: '/folder/why', icon: 'school' },
    { title: 'Pantry', url: '/folder/pantry', icon: 'snow' },
    { title: 'Planner', url: '/folder/planner', icon: 'calendar' },
    { title: 'Recipes', url: '/folder/recipes', icon: 'journal' },
    { title: 'Settings', url: '/folder/settings', icon: 'settings' },
    { title: 'Success', url: '/folder/success', icon: 'medal' },
    { title: 'Tools', url: '/folder/tools', icon: 'calculator' }
  ];
  constructor() {}
}
