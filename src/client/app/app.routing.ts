import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [

	// {
	// 	path: 'dashboard',
	// 	component: DashboardComponent
	// },
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
