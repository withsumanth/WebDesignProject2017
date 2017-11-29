import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user-service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  public user: User;
  constructor(public userservice: UserService) {
    userservice
      .getUsers()
      .subscribe(user => {
        this.user = user;
      });
  }
  onLogin() {
    console.log(this.user);
  }
  ngOnInit() {
  }

}
