import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthenticationService } from '../authentication/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	// loginForm: FormGroup = new FormGroup({
 //    button1: new FormControl(''),
 //    button2: new FormControl(''),
 //  });

  constructor(public auth: AuthenticationService) {}

  ngOnInit() {}

}
