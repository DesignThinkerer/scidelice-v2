import { CommonModule } from '@angular/common'; // required for ngIf
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class RecipeCardComponent  implements OnInit {
  // declaring attributes to control the component
  // input is a decorator that allows the parent component to pass data to the child component
  @Input() hasNotes: boolean = true;
  constructor() { }

  ngOnInit() {}

}
