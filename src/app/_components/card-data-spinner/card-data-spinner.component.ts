import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-data-spinner',
  templateUrl: './card-data-spinner.component.html',
  styles: ``
})
export class CardDataSpinnerComponent {
  @Input() tittle: string;
}
