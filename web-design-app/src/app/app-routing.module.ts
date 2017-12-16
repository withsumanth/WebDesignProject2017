import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserPageComponent } from './create-user-page/create-user-page.component';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { EventsComponent } from './events/events.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PlacesofintComponent } from './placesofint/placesofint.component';
import { NightlifeComponent } from './nightlife/nightlife.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CareersComponent } from './careers/careers.component';
import { AboutBangaloreComponent } from './about-bangalore/about-bangalore.component';

const routes: Routes = [
  {path: 'home', component: IndexComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'createuser', component: CreateUserPageComponent},
  {path: 'loginuser', component: SignInPageComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'disclaimer', component: AboutUsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'placesofint', component: PlacesofintComponent},
  {path: 'ntlife', component: NightlifeComponent},
  {path: 'shopping', component: ShoppingComponent},
  {path: 'career', component: CareersComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
