import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user-service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public isUserLoggedIn = false;
  constructor(private userService: UserService) { }
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
    this.isUserLoggedIn = false;
  }
}
