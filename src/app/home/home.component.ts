import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Angular Server Side Rendering with OAuth2';
  subtitle = 'Featuring Universal and angular-oauth2-oidc';

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {}

}
