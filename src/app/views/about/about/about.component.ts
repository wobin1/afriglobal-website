import { Component } from '@angular/core';
import { AnimateOnscrollService } from 'src/app/shared/services/on-scroll/animate-onscroll.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  values:Array<string>=["Integrity", "Respect for Individuals", "Passion for Customer Success", "Long term Thinking"]
  approach:Array<string>=["On platform of modern management tools, with traditional risk assessment techniques.",
                            "By providing value to our customers and suppliers at every node of the supply chain management.",
                            "By treating our committed work force with human dignity and coaching to excel in their goals and objectives.",
                            "Provide clear line of control for goods from supplier’s factory to customer’s warehouse."]



  constructor(public anim: AnimateOnscrollService){}

  ngOnInit(){
    this.scroll(".item", "show")
  }

  scroll(target:string, style:string){
    this.anim.animateOnScroll(target, style)
  }
}
