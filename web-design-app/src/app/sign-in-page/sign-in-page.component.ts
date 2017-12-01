import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user-service';
import {Router} from '@angular/router';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit, AfterViewInit {

  private valueEntered: number;
  public user: User;
  model = new User();
  //signInForm: FormGroup;
  constructor(public userservice: UserService, private router: Router , fb: FormBuilder) {
    userservice
      .getUsers()
      .subscribe(user => {
        this.user = user;
      });
    /*this.signInForm = fb.group({
        'email' : [ null, Validators.required]
    });*/
  }
  onLogin() {

    /*this.userservice
      .loggedIn(true);
    this.router.navigate(['/home']);*/
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
    $('#email').focus(function(){
      $('#errorBox').html('');
    });
  }

  emailValidate() {
    if($('#email').val().length == 0){
      $('#emailError').html('Enter the  Email');
      return false;
    }else {
      let check:boolean = false;
      for ( let i = 0 ; i < Object.keys(this.user).length ; i++) {
          if($('#email').val() == this.user[i].EMAIL){
            check = true;
            $('#emailError').html('Email already exist');
            return false;
          }
      }
      if(!check){
        $('#emailError').html('');
      }
    }
  }

    passwordValidate() {
      if ($('#password').val().length == 0) {
        $('#passwordError').html('Enter the  Password');
        return false;
      }
    }
}
