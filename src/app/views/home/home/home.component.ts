import { Component } from '@angular/core';
import { AnimateOnscrollService } from 'src/app/shared/services/on-scroll/animate-onscroll.service';
import { RoutingService } from 'src/app/shared/services/routing-service/routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public anim: AnimateOnscrollService, private router: RoutingService){}

  ngOnInit(){
    this.scroll(".item", "show")
    
  }

  scroll(target:string, style:string){
    this.anim.animateOnScroll(target, style)
  }

  route(page:string){
    this.router.route(page)
  }

}
