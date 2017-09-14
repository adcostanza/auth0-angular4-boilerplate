import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   constructor(private authService: AuthService, private router: Router) {}
  login(): void {
	this.authService.login();
  }
  ngOnInit():void {
	let checkAuth = localStorage.getItem('access_token');
	if (typeof checkAuth !== 'undefined' && checkAuth !== null) {
		 this.router.navigate(['/home']);
	}
  }
}
