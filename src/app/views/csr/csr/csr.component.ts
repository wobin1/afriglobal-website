import { Component } from '@angular/core';
import { AnimateOnscrollService } from 'src/app/shared/services/on-scroll/animate-onscroll.service';

@Component({
  selector: 'app-csr',
  templateUrl: './csr.component.html',
  styleUrls: ['./csr.component.css']
})
export class CsrComponent {

  constructor(public anim: AnimateOnscrollService){}

  ngOnInit(){
    this.scroll(".item", "show")
  }

  scroll(target:string, style:string){
    this.anim.animateOnScroll(target, style)
  }

}
