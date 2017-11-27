import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { UserService } from '../user/user-service';
import { User } from '../user/user';
import {Router} from '@angular/router';

@Component({
  selector: 'create-user-page',
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.css']
})
export class CreateUserPageComponent implements OnInit {
  user:User;
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
  }
  model = new User();
  onSignup(){
    this.userService
      .onSignup(this.model)
      .subscribe(()=> this.goBack());
  }

  goBack(){
    this.router.navigate(['/home']);
  }
}
