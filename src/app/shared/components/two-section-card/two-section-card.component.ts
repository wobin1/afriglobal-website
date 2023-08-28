import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-section-card',
  templateUrl: './two-section-card.component.html',
  styleUrls: ['./two-section-card.component.css']
})
export class TwoSectionCardComponent {
  @Input() title!:string;
  @Input() detail!:string;
  @Input() image!:string;
  @Input() button!:boolean;
  @Input() inverse!:boolean;

}
