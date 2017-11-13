import { Component } from '@angular/core';

import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent{
  selectedRecipe: Recipe;
}
