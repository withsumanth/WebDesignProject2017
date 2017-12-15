import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { UserService } from '../app/user/user-service';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { AppComponent } from './app.component';
import { CreateUserPageComponent } from './create-user-page/create-user-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { IndexComponent } from './index/index.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareersComponent } from './careers/careers.component';
import { AboutBangaloreComponent } from './about-bangalore/about-bangalore.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateUserPageComponent,
    SignInPageComponent,
    RestaurantsComponent,
    AboutUsComponent,
    ContactUsComponent,
    CareersComponent,
    AboutBangaloreComponent,
    DisclaimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
