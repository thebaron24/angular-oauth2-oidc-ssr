import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class DataService {

  subscriptions: any = {};
	headers = new HttpHeaders().set('Content-Type', 'application/json');
	httpOptions: Object = {
    observe: 'response'
  };
  api: String = '/api/';

  constructor(private http: HttpClient) {}

  get(path: String){
    const url = this.api + path.toString();

    return this.http.get<any>(url, this.httpOptions)
      .pipe(
        map((response) => {
        	//header access here
        	console.log(response);
        	//return body only
          return response.body;
        }),
        catchError((err: HttpErrorResponse) => {
          this.handleError(err);
          return throwError(err);
        })
      );
  };

  private handleError(error){
    console.log("DataService:", error);
  }

}
