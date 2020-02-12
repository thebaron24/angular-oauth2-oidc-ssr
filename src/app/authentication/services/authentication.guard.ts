import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

	constructor(private oauthService: OAuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.oauthService.hasValidAccessToken()) {
        return true;
    }

    this.router.navigate(['login']).then(data => {
	    //console.log('Route exists, redirection is done');
	  }).catch(e => {
	    //console.log('Route not found, redirection stopped with no error raised');
	    this.oauthService.initLoginFlow();
	  });
  }
  
}
