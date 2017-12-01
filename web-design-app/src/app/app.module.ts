import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { UserService } from '../app/user/user-service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateUserPageComponent } from './create-user-page/create-user-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateUserPageComponent,
    SignInPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
