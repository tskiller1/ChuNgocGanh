import { Injectable } from '@angular/core';  
import { Recipe } from './models/recipe';

@Injectable()
export class ShoppingListService {  

	recipes: Recipe[] = [
	    new Recipe('Schnitzel', 'Very tasty', 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', []),
	    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', []),
	    new Recipe('Canh Chua', 'Vietnamese food', 'https://img-global.cpcdn.com/005_recipes/acea7bafbb3df062/751x532cq70/photo.jpg', [])
  	];

	getListRecipe() {
		return this.recipes;
	}
} 