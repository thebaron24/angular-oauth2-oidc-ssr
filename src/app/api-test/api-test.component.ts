import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.scss']
})
export class ApiTestComponent implements OnInit, OnDestroy {

	result;
	error;
	private subscriptions: any = {};

  constructor(public data: DataService) {}

  ngOnInit() {}

  ngOnDestroy() {
    Object.keys(this.subscriptions).forEach(key => this.subscriptions[key].unsubscribe());
  }

  apiCall() {
  	this.error = undefined;
  	this.result = undefined;
  	this.subscriptions.result = this.data.get('test').subscribe(
  		(result) => {
  			this.result = result;
  		},
  		(error) => {
  			this.error = { 
  				status: error.status,
  				statusText: error.statusText,
  				url: error.url,
  				ok: error.ok,
  				name: error.name,
  				message: error.message
  			};
  		}
  	);
  }

}
