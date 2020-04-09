import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class AppDropdownDirective {
  @HostBinding('class.open') open = false;

  @HostListener('click') toggleDropdown() {
    this.open = !this.open;
  }

  constructor() { }

}
