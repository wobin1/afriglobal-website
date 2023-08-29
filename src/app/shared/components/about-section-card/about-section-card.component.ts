import { Component, Input, Output } from '@angular/core';
import { AnimateOnscrollService } from '../../services/on-scroll/animate-onscroll.service';

@Component({
  selector: 'app-about-section-card',
  templateUrl: './about-section-card.component.html',
  styleUrls: ['./about-section-card.component.css']
})
export class AboutSectionCardComponent {
  @Input() title!:string;
  @Input() detail!:string;
  @Input() image!:string;
  @Input() button!:boolean;
  @Input() inverse!:boolean;

  constructor(public anim: AnimateOnscrollService){}

  ngOnInit(){
    this.scroll(".item", "show")
  }

  scroll(target:string, style:string){
    this.anim.animateOnScroll(target, style)
  }

}
