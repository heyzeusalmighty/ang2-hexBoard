import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdMenuModule } from '@angular2-material/menu';
import { MdSlideToggleModule } from '@angular2-material/slide-toggle';
import { MdTooltipModule } from '@angular2-material/tooltip';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
// import { DashboardRoutingModule } from './dashboard.routing';

import { HeaderComponent } from './header/header.component';


import { DashboardModule } from './dashboard/dashboard.module';
import { HomeComponent } from './home/home.component';
// import { DashboardMapComponent } from './dashboard-map/dashboard-map.component';



@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,		
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routing,
		MdButtonModule.forRoot(),
		MdCardModule.forRoot(),
		MdTabsModule.forRoot(),
		MdInputModule.forRoot(),
		MdListModule.forRoot(),
		MdMenuModule.forRoot(),		
		MdSlideToggleModule.forRoot(),
		MdTooltipModule.forRoot(),
		DashboardModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
