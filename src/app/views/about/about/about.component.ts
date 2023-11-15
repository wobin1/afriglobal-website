import { Component } from '@angular/core';
import { AnimateOnscrollService } from 'src/app/shared/services/on-scroll/animate-onscroll.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  values:Array<string>=["Integrity", "Respect for Individuals", "Passion for Customer Success", "Long term Thinking"]
  approach:Array<string>=["On platform of modern management tools, with traditional risk assessment techniques.",
                            "By providing value to our customers and suppliers at every node of the supply chain management.",
                            "By treating our committed work force with human dignity and coaching to excel in their goals and objectives.",
                            "Provide clear line of control for goods from supplier’s factory to customer’s warehouse."]

  team_data:any = [
    {
        "name":"Mr Maneesh Garg",
        "image":"/assets/images/img/team/img1.png",
        "role":"GROUP CHIEF EXECUTIVE OFFICER",
        "position":"EXECUTIVE DIRECTOR",
        "about":"Mr Maneesh Garg is a serial entrepreneur who has successfully transformed the Family business, Afriglobal Group from a trading and distribution company of raw chemicals and soft commodities to include other industries covering Healthcare, supply chain management and integrated logistics. He has a first degree in Politics, Philosophy and Economics at the University of Oxford, UK and a Master’s Degree in Economics at the North-Western University, US."
       
     },

    {
      "name":"Mr. Sandeep Kapoor",
      "image":"/assets/images/img/team/img2.png",
      "role":"GROUP EXECUTIVE DIRECTOR",
      "position":"EXECUTIVE DIRECTOR",
      "about":"Mr Sandeep Kapoor has over 29 years’ experience in marketing and sales across consumer, industrial & services businesses, including 5 years in East and West Africa. He has a B. Tech in Mechanical Engineering from IIT Delhi & MBA from IIM Ahmadabad. Currently, he serves as the Group Executive Director."
    },
    {
      "name":"Mr. Debasis Mitra Roy",
      "image":"/assets/images/img/team/img3.jpg",
      "role":"",
      "position":"NON EXECUTIVE DIRECTOR",
      "about":"Mr. Roy is an accomplished leader with powerful blend of professional background (CPA, CMA, ACMA & DBF), over 30 years of Global experience in Business& Finance Management and consistent history of achievements and recognition as ”Excellent Performer”. He has Worked & travelled across countries (India, UK, Europe, USA and Africa) with globally renowned groups including Tata, Reliance, GAIL & Dangote in diverse verticals spanning manufacturing and service sectors ( Engineering, Pharmaceuticals Cement, Oil & Gas, Telecom, Construction). He is currently Group Executive Director (earlier CFO & Business Head-Shared Services) of a $300 million regional conglomerate operating in West Africa."
    },
    {
      "name":"David Edwards",
      "image":"/assets/images/img/team/img5.png",
      "role":"",
      "position":"NON EXECUTIVE DIRECTOR",
      "about":"An experienced International Finance Director with proven success in Managing Strategic and Operational Activities, Corporate Restructuring and Multi-site General Management in a high growth environment. Highly motivated and enthusiastic, an excellent communicator at all levels, takes responsibility for issues and motivates the team to get the job done to time and budget.  Confident and articulate with excellent interpersonal skills, leads from the front, delegates where appropriate, brings a ‘can do, will do’ attitude to every endeavour: interested in using skills acquired to support other organisations."
    },
    {
      "name":"Hisham Moussa",
      "image":"/assets/images/img/team/img4.jpg",
      "role":"",
      "position":"NON EXECUTIVE DIRECTOR",
      "about":"Mr. Hisham is a well-rounded Private Equity professional with expertise across origination, execution, post-acquisition monitoring, turnaround management and exit realization. Working knowledge across a wide range of industries with a deeper operating know-how into healthcare verticals. He is the Chief Executive Officer of The Sovereign Fund of Egypt which was established in 2018 to attract private investments to Egypt and promote and co-invest in state-owned assets to maximize their value and efficiency for the Egyptian economy. "
    },
    {
      "name":"Jack Bardakjian",
      "image":"/assets/images/img/team/img6.jpg",
      "role":"Advisory board member of Nagode",
      "position":"NON EXECUTIVE DIRECTOR",
      "about":"Jack Bardakjian is the founder of Gapuma in London, England, in 1999 and is a truly British procurement and logistics company, delivering essential goods and materials to loyal customers, where they are needed most in the world. The vision of founder and CEO Jack Bardakjian, to bring needed commodities and products to Africa, both  affordably and reliably, Gapuma has today become an International group sourcing products from more than 30 countries and delivering them to more than 50 countries around the globe. Gapuma trading partnerships with Africa have grown, and now they trade with over 30 different countries on the continent with an active ‘in country’ distribution in West Africa. Their breadth of experience in sourcing and procuring allows them to interact with the largest companies in world to bring independent trading companies to what they need and when they need it."
    }
  ]

  constructor(public anim: AnimateOnscrollService){}

  ngOnInit(){
    this.scroll(".item", "show")
  }

  scroll(target:string, style:string){
    this.anim.animateOnScroll(target, style)
  }
}
