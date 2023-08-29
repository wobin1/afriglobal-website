import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mission-card',
  templateUrl: './mission-card.component.html',
  styleUrls: ['./mission-card.component.css']
})
export class MissionCardComponent {
  @Input() title!:string;
  @Input() detail!:string;
  @Input() items!: Array<string>;

  ngOnInit(){
    console.log(this.items)
  }



}
