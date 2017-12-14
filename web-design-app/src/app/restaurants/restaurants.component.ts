import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user-service';
import { Restaurants } from '../searchObjects/restaurants';
import { ModalModule } from 'ngx-bootstrap';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import * as $ from 'jquery';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})

export class RestaurantsComponent implements OnInit {
  restaurants: Restaurants;
  resData:Restaurants;
  constructor(private sanitizer: DomSanitizer, private router: Router, private userService: UserService, private route: ActivatedRoute, public modalService: NgbModal) { }

  cityName: any;
  closeResult: string;
  mapName: any[];
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

  cleanURL(oldURL)  {
    return (this.sanitizer.bypassSecurityTrustResourceUrl(oldURL));
  }

  modalopen(content,r:Restaurants){
    this.resData=r;
    this.modalService.open(content,{
      size:'lg',
    });
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

