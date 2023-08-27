import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-business-units',
  templateUrl: './business-units.component.html',
  styleUrls: ['./business-units.component.css']
})
export class BusinessUnitsComponent {
  @Input() logo!:string;
  @Input() companyName!:string;
  @Input() companyDetail!:string;
  
  index:number =3;
  companies = [
   {
      "companyName": "Nagode Industries Limited",
      "logo": "/assets/images/logo1.png",
      "detail": "Nagode Industries Limited is one of the leading B2B chemical and allied services organizations in Nigeria. Our businesses comprises imports, warehousing & distribution.",
    },
    {
      "companyName": "Afriglobal Commodities",
      "logo": "/assets/images/logo2.png",
      "detail": "Afriglobal Commodities (AGC) is a premier Africa focused trading and distribution organization. Incorporated in Nigeria in 1988, AGC is now headquartered in Dubai.",
    },
    {
      "companyName": "Afriglobal Logistics Limited",
      "logo": "/assets/images/logo3.png",
      "detail": "Afriglobal Logistics Limited is an integrated end-to-end logistics provider with over 20 years’ experience operating in Nigeria.",
    },
    {
      "companyName": "Afriglobal Medicare Limited",
      "logo": "/assets/images/logo4.png",
      "detail": "At Afriglobal Medicare Limited (AML) our vision is to create a medical diagnostics facility that puts the ‘Patients First’. With this goal, we aim to create a new benchmark for diagnostics services in Nigeria.",
    }
  ]

  render = [this.companies[1], this.companies[2], this.companies[3]]

  ngOnInit(){

  }

  next(){

    if(this.index <= 3 ){
      this.index = this.index +  1;
      console.log(this.index)
      console.log("above is new index")
    }else {
      console.log("the conditional statement is the problem")
    }
    
    

    let newRender = this.render.splice(0,1)
    console.log(this.render)
    console.log(this.index)

    if(this.index > 3){
      this.index=0
      this.render.push(this.companies[this.index])
      console.log(this.render)
    }else {
      this.render.push(this.companies[this.index])
      console.log(this.render)
    }
  }





}
