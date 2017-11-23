import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    SignInPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
