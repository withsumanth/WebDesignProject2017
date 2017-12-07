import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user-service';
import {Router, NavigationExtras} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  searchList = ["Food","Shopping","Events","Nightlife","Places of Interest","E-Learning"];
  public isUserLoggedIn = false;
  values: any[];
  constructor(private userService: UserService , private router: Router) { }
  ngOnInit() {
    this.isUserLoggedIn = this.userService
      .isLoggedIn();
  }
  citiesList = [ {
    'Name': 'Boston',
  },
    {
      'Name': 'New York City',
    },
    {
      'Name': 'Los Angeles',
    },
    {
      'Name': 'Las Vegas',
    },
    {
      'Name': 'Bengaluru',
    },
    {
      'Name': 'Hyderabad',
    },
    {
      'Name': 'Mumbai',
    },
    {
      'Name': 'Nagpur',
    }
  ];

  logoutClicked(event: Event) {
    var retVal = confirm("Are you sure you want to create an account with us?");
    if( retVal == true ){
      this.isUserLoggedIn = false;
    }else{
      return false;
    }
  }
    searchValidation(){
        let check: boolean = false;
        for(var i=0;i<this.searchList.length;i++){
            if($('#searchInput').val().toString().toUpperCase()=== this.searchList[i].toUpperCase()){
              console.log($('#selectValue').val());
                check = true;
                break;
            }
        }
        if(check){
          if($('#searchInput').val().toString().toUpperCase() === 'FOOD'){
            let navigationExtras: NavigationExtras = {
              queryParams: {
                "cityName": $('#selectValue').val().toString().toUpperCase()
              }
            };
            this.router.navigate(['/restaurants'], navigationExtras);
          }
          /*this.values.add($('#selectValue').val().toString().toUpperCase());

          this.userService
            .selectData(this.values)
            .subscribe(restaurants => {
              this.restaurants = restaurants;}, this.nextPage());*/
        }else{
          $('#resultError').html('No Result');
          return false;
        }
    }
}
