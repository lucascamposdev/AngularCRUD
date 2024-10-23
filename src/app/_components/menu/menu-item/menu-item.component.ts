import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styles: ``
})
export class MenuItemComponent {
  @Input() link: string ;
}
