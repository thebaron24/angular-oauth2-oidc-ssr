import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: '',
		loadChildren: () => import('./authentication/authentication.module').then(mod => mod.AuthenticationModule)
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
