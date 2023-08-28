import { Component } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent {

  index:number=0;
  awards = [
    {
      "image": "/assets/images/awards/1.png",
      "year": "2017",
      "detail": "Afriglobal Group ( Formerly Nagode group) a conglomerate with business interests in the chemicals distribution, Logistics and healthcare industries has been identified as one of London Stock Exchange Group’s Companies to Inspire Africa 2019. The report is a celebration of Africa’s and most dynamic growth businesses."
    },
    {
      "image": "/assets/images/awards/1.png",
      "year": "2019",
      "detail": "Afriglobal Group ( Formerly Nagode group) a conglomerate with business interests in the chemicals distribution, Logistics and healthcare industries has been identified as one of London Stock Exchange Group’s Companies to Inspire Africa 2019. The report is a celebration of Africa’s and most dynamic growth businesses."
    },
    {
      "image": "/assets/images/awards/2.png",
      "year": "2016",
      "detail": "Afriglobal Commodities ranked 10th among the top 100 Chemical distributors in Middle East Africa according to the most prestigious chemical magazine – ICIS Chemical Business Magazine."
    },
    {
      "image": "/assets/images/awards/2.png",
      "year": "2017",
      "detail": "Afriglobal Group ( Formerly Nagode Group) was named in the first ever “Companies to Inspire Africa” report by the London Stock Exchange (LSE) as part of 58 companies in Nigeria who have demonstrated the success of Nigeria’s effort to diversify its economy and as part of 343 companies in Africa to lead real change."
    },
    {
      "image": "/assets/images/awards/2.png",
      "year": "2016",
      "detail": "Afriglobal Commodities ranked 108th globally among the top 328 Chemical distributors worldwide. This is according to the most prestigious chemical magazine – ICIS Chemical Business Magazine."
    },
    {
      "image": "/assets/images/awards/3.png",
      "year": "2014",
      "detail": "Nagode Industries Limited was listed among six Nigerian Companies set for massive growth by the International Business Times."
    },
    {
      "image": "/assets/images/awards/4.png",
      "year": "2014",
      "detail": "Afriglobal group (formerly Nagode group) emerged  as one of the 16 African Global Growth Companies (GGCs) Companies to join the World Economic Forum’s (WEF) Global Growth Companies community."
    },
    
  ]

  award=this.awards[this.index]

  ngOnInit(){}

  next(){
    if(this.index >= 7){
      this.index=0;
      this.award=this.awards[this.index]
    }else {
      this.index += 1;
      this.award=this.awards[this.index]
    }
  }

  prev(){
    if(this.index <= 0){
      this.index=7;
      this.award=this.awards[this.index]
    }else {
      this.index -= 1;
      this.award=this.awards[this.index]

    }
  }

}
