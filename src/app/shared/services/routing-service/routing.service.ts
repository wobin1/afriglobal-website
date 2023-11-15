import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }

  constructor(private router: Router) { }


  route(page:string){
    if(page=='home'){
      this.router.navigateByUrl('')
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
