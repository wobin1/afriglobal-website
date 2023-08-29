import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  values:Array<string>=["Integrity", "Respect for Individuals", "Passion for Customer Success", "Long term Thinking"]

}
