import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-boston-individual-page',
  templateUrl: './boston-individual-page.component.html',
  styleUrls: ['./boston-individual-page.component.css']
})
export class BostonIndividualPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ntlife(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "cityName": "BOSTON"
      }
    };
    this.router.navigate(['/ntlife'], navigationExtras);
  }

  shopping(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "cityName": "BOSTON"
      }
    };
    this.router.navigate(['/shopping'], navigationExtras);
  }

  events(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "cityName": "BOSTON"
      }
    };
    this.router.navigate(['/events'], navigationExtras);
  }

  placeofint(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "cityName": "BOSTON"
      }
    };
    this.router.navigate(['/placesofint'], navigationExtras);
  }

  rest(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "cityName": "BOSTON"
      }
    };
    this.router.navigate(['/restaurants'], navigationExtras);
  }

}
