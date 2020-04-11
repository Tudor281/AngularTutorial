import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'description',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ], 1),
    new Recipe(
      'Burger',
      'description2',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat',1)
      ], 2)
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); //slice e clone()
  }

  getRecipeById(id: number) {
    for (const recipe of this.recipes) {
      if (recipe.id == id) {
        return recipe;
      }
    }
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients); 
  }
}
