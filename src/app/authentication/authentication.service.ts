import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  	private readonly _isAuthenticated = new BehaviorSubject<Boolean>(false);
  	public readonly $isAuthenticated = this._isAuthenticated.asObservable();

	constructor(public oktaAuth: OktaAuthService, private router: Router) {
		this.oktaAuth.$authenticationState.subscribe(isAuthenticated => {
			this._isAuthenticated.next(isAuthenticated);
		});
	}

	async ngOnInit() {
		let isAuth = await this.oktaAuth.isAuthenticated();
		this._isAuthenticated.next(isAuth);
	}

	async getToken() {
		const accessToken = await this.oktaAuth.getAccessToken();
		return accessToken;
	}

	logout() {
		this.oktaAuth.logout('/');
	}
}
