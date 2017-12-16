import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-nycindividual-page',
  templateUrl: './nycindividual-page.component.html',
  styleUrls: ['./nycindividual-page.component.css']
})
export class NycindividualPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ntlife(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "cityName": "NEW YORK"
      }
    };
    this.router.navigate(['/ntlife'], navigationExtras);
  }

  shopping(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "cityName": "NEW YORK"
      }
    };
    this.router.navigate(['/shopping'], navigationExtras);
  }

  events(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "cityName": "NEW YORK"
      }
    };
    this.router.navigate(['/events'], navigationExtras);
  }

  placeofint(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "cityName": "NEW YORK"
      }
    };
    this.router.navigate(['/placesofint'], navigationExtras);
  }

  rest(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "cityName": "NEW YORK"
      }
    };
    this.router.navigate(['/restaurants'], navigationExtras);
  }

}
