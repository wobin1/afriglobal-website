import { Component } from '@angular/core';
import { AnimateOnscrollService } from 'src/app/shared/services/on-scroll/animate-onscroll.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent {

  constructor(public anim: AnimateOnscrollService){}

  ngOnInit(){
    this.scroll(".item", "show")
  }

  scroll(target:string, style:string){
    this.anim.animateOnScroll(target, style)
  }

}
