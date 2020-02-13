import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

    constructor(private authService: OAuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.authService.hasValidAccessToken()) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + this.authService.getAccessToken()
                }
            });
        }

        return next.handle(request);
    }

}