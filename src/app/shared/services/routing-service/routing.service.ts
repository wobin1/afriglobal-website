import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router) { }


  route(page:string){
    if(page=='home'){
      this.router.navigateByUrl('home')
    }
    if(page=='about'){
      this.router.navigateByUrl('about')
    }
    if(page=='companies'){
      this.router.navigateByUrl('companies')
    }
    if(page=='career'){
      this.router.navigateByUrl('career')
    }
    if(page=='csr'){
      this.router.navigateByUrl('csr')
    }
    if(page=='awards'){
      this.router.navigateByUrl('awards')
    }
    if(page=='contact'){
      this.router.navigateByUrl('contact')
    }
  }
}
