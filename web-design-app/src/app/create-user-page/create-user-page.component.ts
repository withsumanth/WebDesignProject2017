import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { UserService } from '../user/user-service';
import { User } from '../user/user';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
    selector: 'create-user-page',
    templateUrl: './create-user-page.component.html',
    styleUrls: ['./create-user-page.component.css']
})
export class CreateUserPageComponent implements OnInit, AfterViewInit {
    user: User;
    constructor(private userService: UserService, private router: Router) {
        userService
            .getUsers()
            .subscribe(user => {
                this.user = user;
            });
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        $('#email').focus(function() {
            $('#emailError').html('');
            $('#signupError').html('');
        });
        $('#password').focus(function() {
            $('#passwordError').html('');
            $('#signupError').html('');
        });
        $('#name').focus(function() {
            $('#nameError').html('');
            $('#signupError').html('');
        });
        $('#remail').focus(function() {
            $('#repPassError').html('');
            $('#signupError').html('');
        });
    }

    model = new User();
    onSignup() {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ($('#email').val().toString().length.toString() === '0' || $('#password').val().toString().length.toString() === '0' || $('#name').val().toString().length.toString() === '0' || $('#remail').val().toString().length.toString() === '0') {
            $('#signupError').html('Please enter all the fields');
            return false;
        } else if (!regex.test($("#email").val())) {
            $('#emailError').html('Email format is wrong');
            return false;
        } else if ($('#password').val().toString() !== $('#remail').val().toString()) {
            $('#repPassError').html('Password entered does not match');
            return false;
        }
        let check: boolean = false;
        for (let i = 0; i < Object.keys(this.user).length; i++) {
            if ($('#email').val() === this.user[i].EMAIL) {
                check = true;
            }
        }
        if (check) {
            $('#emailError').html('Email id already exists');
            return false;
        } else {
            this.userService
                .onSignup(this.model)
                .subscribe(() => this.goBack());
        }
    }

    goBack() {
        this.router.navigate(['/home']);
    }

    emailValidate() {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ($('#email').val().toString().length.toString() === '0') {
            $('#emailError').html('Enter the  Email');
            return false;
        } else if (!regex.test($("#email").val())) {
            $('#emailError').html('Email format is wrong');
            return false;
        } else {
            let check: boolean = false;
            for (let i = 0; i < Object.keys(this.user).length; i++) {
                if ($('#email').val() === this.user[i].EMAIL) {
                    check = true;
                }
            }
            if (check) {
                $('#emailError').html('Email id already exists');
                return false;
            }
        }
    }

    passwordValidate() {
        if ($('#password').val().toString().length.toString() === '0') {
            $('#passwordError').html('Enter the  Password');
            return false;
        }
    }

    nameValidate() {
        if ($('#name').val().toString().length.toString() === '0') {
            $('#nameError').html('Enter Name');
            return false;
        }
    }

    repeatpasswordValidate() {
        if ($('#remail').val().toString().length.toString() === '0') {
            $('#repPassError').html('Enter the  Password');
            return false;
        } else {
            if ($('#password').val().toString() !== $('#remail').val().toString()) {
                $('#repPassError').html('Password entered does not match');
                return false;
            }
        }
    }

}
