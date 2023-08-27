import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footprint',
  templateUrl: './footprint.component.html',
  styleUrls: ['./footprint.component.css']
})
export class FootprintComponent {
    @Input() title!:string;
    @Input() detail!:string;
    @Input() image!:string;

    
}
