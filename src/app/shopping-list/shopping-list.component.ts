import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];

  constructor() { }

  ngOnInit() {
  }

}
