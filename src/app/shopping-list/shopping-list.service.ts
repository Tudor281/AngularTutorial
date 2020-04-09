import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // THIS WILL PRODUCE A LOT OF EVENTS
    // for (let ingredient of ingredients) {
     // this.addIngredient(ingredient);
    //}

    this.ingredients.push(...ingredients);
    //this is the spread operation
    // if you did push(ingredients) it would simply add the array to the elements
    // instead with ... you add ingredient1, ingredient2 etc
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
