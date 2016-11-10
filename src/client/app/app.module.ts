import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HeaderComponent } from './header/header.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { HomeComponent } from './home/home.component';


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
		MaterialModule.forRoot(),
		DashboardModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
