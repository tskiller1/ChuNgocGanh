import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  providers: [ShoppingListService]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipesService: ShoppingListService) {

  }

  @Output() recipeSelected = new EventEmitter<Recipe>();
  //recipe = new Recipe('Dao Nguyen Minh', 'HCMUTE Teacher - The most famous, awesome teacher!', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_PCo4qyOMhg1yyScVJISB6igsvkuHg2vSTmMcoyOwtGv9o0U', []);

  onSelected(recipe : Recipe){
    this.recipeSelected.emit(recipe);
  }

  ngOnInit() {
    this.recipes = this.recipesService.getListRecipe();
  }
}
