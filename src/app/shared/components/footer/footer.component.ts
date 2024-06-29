import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year:any;

  ngOnInit(){
    const d = new Date();
    this.year = d.getFullYear();
  }

}
