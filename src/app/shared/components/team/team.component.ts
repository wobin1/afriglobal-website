import { Component, Input, Output } from '@angular/core';
import { AnimateOnscrollService } from '../../services/on-scroll/animate-onscroll.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  @Input() name!:string;
  @Input() role!:string;
  @Input() position!:string;
  @Input() about!:string;
  @Input() inverse!:boolean;
  @Input() image!:string;

  constructor(public anim: AnimateOnscrollService){}

  ngOnInit(){
    this.scroll(".item", "show")
  }

  scroll(target:string, style:string){
    this.anim.animateOnScroll(target, style)
  }

}
