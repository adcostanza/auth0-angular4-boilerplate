import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private authService: AuthService, private router: Router) { }
 
    canActivate(): boolean {
		if(!this.authService.isAuthenticated()) {
			this.router.navigate(['/login']);
			return false;
		} else {
			return true;
		}
    }
	canActivateChild(): boolean {
		return this.authService.isAuthenticated();
	}
}