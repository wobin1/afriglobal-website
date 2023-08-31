import { Component } from '@angular/core';
import { RoutingService } from '../../services/routing-service/routing.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  sidenav:boolean=false;

  constructor(private router: RoutingService){}

  toggle(){
    this.sidenav = !this.sidenav;
  }

  closeToggle(){
    this.sidenav = false;
  }

  route(page:string){
    this.router.route(page)
    this.sidenav = false;
  }

}
