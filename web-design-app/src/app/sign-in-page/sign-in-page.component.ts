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
  constructor(public userservice: UserService, private router: Router , fb: FormBuilder) {
    userservice
      .getUsers()
      .subscribe(user => {
        this.user = user;
      });
  }
  onLogin() {
      if($('#email').val().toString().length.toString() === '0' || $('#password').val().toString().length.toString() === '0'){
           $('#loginError').html('Please enter Email and Password');
            return false;
      }
    let check: boolean = false;
      for ( let i = 0 ; i < Object.keys(this.user).length ; i++) {
          if ($('#email').val() === this.user[i].EMAIL && $('#password').val() === this.user[i].PASSWORD){
            check = true;
          }
      }
      if(!check){
          $('#loginError').html('Email id/Password is invalid');
          return false;
      }else{
          this.userservice
      .loggedIn(true);
    this.router.navigate(['/home']);
      }
  }
  ngOnInit() {

  }

  ngAfterViewInit() {
    $('#email').focus(function(){
      $('#emailError').html('');
      $('#loginError').html('');
    });
      $('#password').focus(function(){
      $('#passwordError').html('');
      $('#loginError').html('');
    });
  }

  emailValidate() {
    if ($('#email').val().toString().length.toString() === '0' ) {
      $('#emailError').html('Enter the  Email');
      return false;
    }else{
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var valid = regex.test($("#email").val());
        if(!valid){
             $('#emailError').html('Email format is wrong');
            return false;   
        }
    }
  }

    passwordValidate() {
      if ($('#password').val().toString().length.toString() === '0' ) {
        $('#passwordError').html('Enter the  Password');
        return false;
      }
    }
}
