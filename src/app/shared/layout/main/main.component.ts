import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  sidenav:boolean=false;

  toggle(){
    this.sidenav = !this.sidenav;
  }

  closeToggle(){
    this.sidenav = false;
  }

}
