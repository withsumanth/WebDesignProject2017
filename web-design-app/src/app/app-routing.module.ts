import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserPageComponent } from './create-user-page/create-user-page.component';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

const routes: Routes = [
  {path: 'home', component: IndexComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'createuser', component: CreateUserPageComponent},
  {path: 'loginuser', component: SignInPageComponent},
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
