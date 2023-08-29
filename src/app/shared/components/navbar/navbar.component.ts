import { Component, Output, EventEmitter } from '@angular/core';
import { RoutingService } from '../../services/routing-service/routing.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() btnClick = new EventEmitter()


  constructor(private router: RoutingService){}

  onClick(){
    this.btnClick.emit()
  }

  route(page:string){
    this.router.route(page)
  }

  
}
