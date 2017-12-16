import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user-service';
import {Router, NavigationExtras} from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
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
  closeResult: string;
  constructor(private userService: UserService , private router: Router, public modalService: NgbModal) { }
  ngOnInit() {
    this.isUserLoggedIn = this.userService
      .isLoggedIn();
  }
  citiesList = [ {
    'Name': 'Boston',
  },
    {
      'Name': 'New York',
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
    searchValidation(content){
        let check: boolean = false;
       // if(!this.isUserLoggedIn){
          //this.modalService.open(content);
        //}else{
          for(var i=0;i<this.searchList.length;i++){
            if($('#searchInput').val().toString().toUpperCase()=== this.searchList[i].toUpperCase()){
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
            }else if($('#searchInput').val().toString().toUpperCase() === 'EVENTS'){
              let navigationExtras: NavigationExtras = {
                queryParams: {
                  "cityName": $('#selectValue').val().toString().toUpperCase()
                }
              };
              this.router.navigate(['/events'], navigationExtras);
            }else if($('#searchInput').val().toString().toUpperCase() === 'PLACES OF INTEREST'){
              let navigationExtras: NavigationExtras = {
                queryParams: {
                  "cityName": $('#selectValue').val().toString().toUpperCase()
                }
              };
              this.router.navigate(['/placesofint'], navigationExtras);
            }else if($('#searchInput').val().toString().toUpperCase() === 'NIGHTLIFE'){
              let navigationExtras: NavigationExtras = {
                queryParams: {
                  "cityName": $('#selectValue').val().toString().toUpperCase()
                }
              };
              this.router.navigate(['/ntlife'], navigationExtras);
            }else if($('#searchInput').val().toString().toUpperCase() === 'SHOPPING'){
              let navigationExtras: NavigationExtras = {
                queryParams: {
                  "cityName": $('#selectValue').val().toString().toUpperCase()
                }
              };
              this.router.navigate(['/shopping'], navigationExtras);
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
        //}

    }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
