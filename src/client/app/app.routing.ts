import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameScreenComponent } from './game-screen/game-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [

	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'game',
		component: GameScreenComponent
	},
	{
		path: '',
		redirectTo: '/game',
		pathMatch: 'full'
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);