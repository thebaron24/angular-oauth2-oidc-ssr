import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Baron Wilson';
  subtitle = 'Sound Front End Development';

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
  }

}
