import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output('selectedPageEvent') selectedPageEvent = new EventEmitter<string>();

  showRecipes() {
    this.selectedPageEvent.emit('recipes');
    console.log("Recipes");
  }

  showShopping() {
    this.selectedPageEvent.emit('shopping');
    console.log("Shopping");
  }
}
