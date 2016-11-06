import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardMapComponent } from './components/dashboard-map/dashboard-map.component';
import { DashboardProfileComponent } from './components/dashboard-profile/dashboard-profile.component';
import { DashboardScienceComponent } from './components/dashboard-science/dashboard-science.component';
import { DashboardResearchComponent } from './components/dashboard-research/dashboard-research.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'dashboard',
				component: DashboardComponent,
				children: [
					{
						path: 'map',
						component: DashboardMapComponent
					},
					{
						path: 'profile',
						component: DashboardProfileComponent
					},
					{
						path: 'science',
						component: DashboardScienceComponent
					},
					{ 
						path: 'research',
						component: DashboardResearchComponent
					},
					{
						path: '',
						component: DashboardMapComponent,
						pathMatch: 'full'
					}
				]

			}
		])
	],
	exports: [ 
		RouterModule 
	]
})
export class DashboardRoutingModule { }


// const appRoutes: Routes = [

// 	{
// 		path: 'map',
// 		component: DashboardMapComponent
// 	},
// 	// {
// 	// 	path: 'game',
// 	// 	component: GameScreenComponent
// 	// },
// 	{
// 		path: '',
// 		redirectTo: '/map',
// 		pathMatch: 'full'
// 	}
// ];

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);