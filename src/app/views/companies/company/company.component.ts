import { Component } from '@angular/core';
import { AnimateOnscrollService } from 'src/app/shared/services/on-scroll/animate-onscroll.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

  constructor(public anim: AnimateOnscrollService){}

  ngOnInit(){
    this.scroll(".item", "show")
  }

  scroll(target:string, style:string){
    this.anim.animateOnScroll(target, style)
  }

}
