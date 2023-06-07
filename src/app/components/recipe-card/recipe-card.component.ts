import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class RecipeCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
