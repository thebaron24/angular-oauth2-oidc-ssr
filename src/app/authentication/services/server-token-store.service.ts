import { Injectable, Inject } from '@angular/core';
import { OAuthStorage } from 'angular-oauth2-oidc';

import {
  CookiesService,
  CookiesOptionsService,
  CookiesOptions
} from '@ngx-utils/cookies';


@Injectable()
export class ServerTokenStoreService extends CookiesService implements OAuthStorage {

    constructor( private cookies: CookiesService, private cookiesOptions: CookiesOptionsService){
        super(cookiesOptions);
        console.log("ServerTokenStoreService");
       
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