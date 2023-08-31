import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RoutingService } from '../../services/routing-service/routing.service';

@Component({
  selector: 'app-business-units',
  templateUrl: './business-units.component.html',
  styleUrls: ['./business-units.component.css']
})
export class BusinessUnitsComponent {
  @Input() logo!:string;
  @Input() companyName!:string;
  @Input() companyDetail!:string;

  
  index:number =4;
  companies = [
    {
      "companyName": "Advance Medisystems Limited",
      "logo": "/assets/images/logo5.png",
      "website": "https://advancemedisystems.com/",
      "detail": "Advance Medisystems has fast become one of the best medical sales & service operation in Nigeria & West Africa. We have a team of highly trained, passionate and customer centric staff who pride in selling high quality equipment, reagents and consumables.",
    },
   {
      "companyName": "Nagode Industries Limited",
      "logo": "/assets/images/logo1.png",
      "website": "https://www.nagode.com/",
      "detail": "Nagode Industries Limited is one of the leading B2B chemical and allied services organizations in Nigeria. Our businesses comprises imports, warehousing & distribution.",
    },
    {
      "companyName": "Afriglobal Commodities",
      "logo": "/assets/images/logo2.png",
      "website": "https://afriglobalonline.com/",
      "detail": "Afriglobal Commodities (AGC) is a premier Africa focused trading and distribution organization. Incorporated in Nigeria in 1988, AGC is now headquartered in Dubai.",
    },
    {
      "companyName": "Afriglobal Logistics Limited",
      "logo": "/assets/images/logo3.png",
      "website": "https://afriglobal-logistics.com/",
      "detail": "Afriglobal Logistics Limited is an integrated end-to-end logistics provider with over 20 years’ experience operating in Nigeria.",
    },
    {
      "companyName": "Afriglobal Medicare Limited",
      "logo": "/assets/images/logo4.png",
      "website": "http://www.afriglobalmedicare.com/",
      "detail": "At Afriglobal Medicare Limited (AML) our vision is to create a medical diagnostics facility that puts the ‘Patients First’. With this goal, we aim to create a new benchmark for diagnostics services in Nigeria.",
    }
  ]

  render = [this.companies[1], this.companies[2], this.companies[3]]
  mobileRender = this.companies[this.index]

  constructor(private router: RoutingService){}

  route(page:string){
    this.router.route(page)
  }

  mobileNext(){
    if(this.index >= 4){
      this.index=0;
      this.mobileRender=this.companies[this.index]
    }else {
      this.index += 1;
      this.mobileRender=this.companies[this.index]
    }
  }

  mobilePrev(){
    if(this.index <= 0){
      this.index=3;
      this.mobileRender=this.companies[this.index]
    }else {
      this.index -= 1;
      this.mobileRender=this.companies[this.index]

    }
  }

  next(){

    if(this.index <= 4 ){
      this.index = this.index +  1;
      console.log(this.index)
      console.log("above is new index")
    }else {
      console.log("the conditional statement is the problem")
    }
    
    

    let newRender = this.render.splice(0,1)
    console.log(this.render)
    console.log(this.index)

    if(this.index > 4){
      this.index=0
      this.render.push(this.companies[this.index])
      console.log(this.render)
    }else {
      this.render.push(this.companies[this.index])
      console.log(this.render)
    }
  }





}
