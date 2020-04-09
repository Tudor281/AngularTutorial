import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output('selectedPageEvent') selectedPageEvent = new EventEmitter<string>();

  showRecipes() {
    this.selectedPageEvent.emit('recipes');
  }

  showShopping() {
    this.selectedPageEvent.emit('shopping');
  }
}
