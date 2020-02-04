import { Injectable, Inject } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap, map  } from 'rxjs/operators';
import { OAuthService } from "angular-oauth2-oidc";

@Injectable()
export class HttpService {

    constructor(public http: HttpClient,
        // @Inject('BASE_URL') public baseURL: string,
        private oauthService: OAuthService) { }

    public get(path: string, cache: boolean = false, parameters?: Map<string, string>): Observable<any> {

        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        let params = new HttpParams();

        if (parameters) {
            parameters.forEach((value: string, key: string) => {
                params = params.append(key, value);
            });
        }

        return this.http.get(path, { headers: headers, params: params });
    }

    public post(path: string, postBody: any, multipart?: boolean): Observable<Response> {

        let headers = new HttpHeaders();

        if (multipart === true) {
            // header.append('Content-Type', 'multipart/form-data');
        } else {
            headers.set('Content-Type', 'application/json');
        }

        return this.http.post<Response>(path, postBody, { headers: headers });

    }

    public put(path: string, putBody: any): Observable<Response> {

        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.put<Response>(path, putBody, { headers: headers });

    }

    public patch(path: string, patchBody: any, multipart?: boolean): Observable<Response> {

        let headers = new HttpHeaders();
        let params = new HttpParams();

        if (multipart === true) {
            // header.append('Content-Type', 'multipart/form-data');
        } else {
            headers.set('Content-Type', 'application/json');
        }

        return this.http.patch<Response>(path, patchBody, { headers: headers });

    }
}