import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdTabsModule } from '@angular2-material/tabs';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { HexGridComponent } from './hex-grid/hex-grid.component';
import { HexTileComponent } from './hex-tile/hex-tile.component';
import { HeaderComponent } from './header/header.component';
import { PlayerBarComponent } from './player-bar/player-bar.component';
import { playerReducer } from './reducers/player.reducer';
import { PlayerEffectsService } from './services/player-effects.service';

const appReducers: any = {
	player: playerReducer
}

@NgModule({
	declarations: [
		AppComponent,
		GameScreenComponent,
		HexGridComponent,
		HexTileComponent,
		HeaderComponent,
		PlayerBarComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MdButtonModule.forRoot(),
		MdCardModule.forRoot(),
		MdTabsModule.forRoot(),
		MdInputModule.forRoot(),
		MdListModule.forRoot(),
		StoreModule.provideStore(appReducers),
		EffectsModule.run(PlayerEffectsService),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
