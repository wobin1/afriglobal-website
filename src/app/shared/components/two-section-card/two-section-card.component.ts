import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AnimateOnscrollService } from '../../services/on-scroll/animate-onscroll.service';

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
  @Input() others!:boolean;

  constructor(public anim: AnimateOnscrollService){}

  ngOnInit(){
    this.scroll(".item", "show")
  }

  scroll(target:string, style:string){
    this.anim.animateOnScroll(target, style)
  }

}
