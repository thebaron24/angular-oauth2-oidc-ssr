import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
	// {
	// 	path: 'implicit/callback',
	// 	component: 
	// },
	// {
	// 	path: 'login',
	// 	component: LoginComponent
	// },
	{
		path: 'profile',
		component: ProfileComponent,
		//canActivate: [  ]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
