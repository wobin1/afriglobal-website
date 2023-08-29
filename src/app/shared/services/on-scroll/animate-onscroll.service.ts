import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimateOnscrollService {

  constructor() { }

  animateOnScroll(target:string, style:string){
    const comp = document.querySelectorAll(target)
    const observer = new IntersectionObserver(entries =>{
      entries.forEach(entry => {

        entry.target.classList.toggle(style, entry.isIntersecting)
        // if(entry.isIntersecting) observer.unobserve(entry.target)
      })
    }, {
      threshold: 0.2,
    })

    comp.forEach(item => {
      observer.observe(item)
    })
  }
  

}
