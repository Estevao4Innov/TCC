import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  images: [{ 
    image: 'https://cdn.dooca.store/1841/files/monte-seu-pc.png?v=1610807331&webp=0'
  }]
  

  slideOptions = {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  }

  constructor(private router: Router) {}

  toForward(place){
    this.router.navigate([`${place}`])
  }

}
