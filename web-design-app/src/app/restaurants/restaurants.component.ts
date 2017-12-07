import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user-service';
import { Restaurants } from '../searchObjects/restaurants';
import * as $ from 'jquery';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurants;

  constructor(private sanitizer: DomSanitizer, private router: Router, private userService: UserService, private route: ActivatedRoute) { }

  cityName: any;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.cityName = params["cityName"];
    });
    this.userService
      .selectData(this.cityName)
      .subscribe(restaurants => {
        this.restaurants = restaurants;
      });
  }

  onClick(){
    console.log(this.restaurants);
  }

  cleanURL(oldURL: string)  {
    return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
  }

}
