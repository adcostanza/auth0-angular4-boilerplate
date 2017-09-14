import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router, CanActivate, CanActivateChild} from "@angular/router";
import { AppComponent } from './app.component';

import {CallbackComponent} from './callback/callback.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import {AuthService} from "./auth/auth.service";
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: '', component: AppComponent, canActivate: [AuthGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'callback',component:CallbackComponent},
  {path: 'home', component:AppComponent,
  canActivate: [AuthGuard]},
  {path: '**', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
	LoginComponent,
	IndexComponent,
	CallbackComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [IndexComponent]
})
export class AppModule { }
