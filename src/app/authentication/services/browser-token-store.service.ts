import { Injectable, Inject } from '@angular/core';
import { OAuthStorage } from 'angular-oauth2-oidc';
import { CookiesService } from '@ngx-utils/cookies';

@Injectable()
export class BrowserTokenStoreService implements OAuthStorage {

    constructor(private cookies: CookiesService) {
        //console.log("BrowserTokenStoreService");
    }

    getItem(key: string): string {
        return this.cookies.get(key);
    }

    removeItem(key: string): void {
        this.cookies.remove(key);
    }

    setItem(key: string, data: string): void {
        this.cookies.put(key, data);
    }
}
