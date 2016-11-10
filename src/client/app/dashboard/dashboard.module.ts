import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { playerReducer } from './reducers/player.reducer';
import { mapReducer } from './reducers/map.reducer';
import { PlayerEffectsService } from './services/player-effects.service';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { DashboardMapComponent } from './components/dashboard-map/dashboard-map.component';
import { DashboardProfileComponent } from './components/dashboard-profile/dashboard-profile.component';
import { DashboardScienceComponent } from './components/dashboard-science/dashboard-science.component';
import { DashboardResearchComponent } from './components/dashboard-research/dashboard-research.component';
import { PlayerBarComponent } from './components/player-bar/player-bar.component';
import { MoneyBoxComponent } from './components/money-box/money-box.component';
import { HexGridComponent } from './components/hex-grid/hex-grid.component';
import { HexTileComponent } from './components/hex-tile/hex-tile.component';
import { ColonyShipsComponent } from './components/colony-ships/colony-ships.component';
import { BigHexComponent } from './components/big-hex/big-hex.component';
import { GameService } from './services/game.service';


const appReducers: any = {
	player: playerReducer,
	map: mapReducer
};


@NgModule({
	imports: [ 
		CommonModule, 
		FormsModule,
		DashboardRoutingModule,
		MaterialModule.forRoot(),
		StoreModule.provideStore(appReducers),
		EffectsModule.run(PlayerEffectsService), 
	],
	declarations: [ 
		DashboardComponent, 
		DashboardMapComponent,
		DashboardProfileComponent,
		DashboardScienceComponent,
		DashboardResearchComponent,
		PlayerBarComponent,
		MoneyBoxComponent,
		HexGridComponent,
		HexTileComponent,
		ColonyShipsComponent,
		BigHexComponent
	],
	providers: [
		GameService
	]
})
export class DashboardModule {}
