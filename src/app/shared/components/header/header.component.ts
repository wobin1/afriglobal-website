import { Component, Input, Output } from '@angular/core';
import { RoutingService } from '../../services/routing-service/routing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() page!:string;
  @Input() contact!:boolean;

  constructor(private router: RoutingService){}



  route(page:string){
    this.router.route(page)
  }

}
