import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { PlayerModel } from '../models/playerModel';
import { GameService } from '../services/game.service';

@Component({
	selector: 'player-bar',
	templateUrl: './player-bar.component.html',
	styleUrls: ['./player-bar.component.css']
})
export class PlayerBarComponent implements OnInit {

	playerStore: Observable<any>;
	playerData: Observable<PlayerModel> = null;
	status: Observable<any>;
	totalDiscs: Array<any>;


	constructor(private gameService: GameService) { }

	ngOnInit() {
		this.getPlayerData();
	}

	
	getPlayerData() {
		this.playerStore = this.gameService.getPlayerStore();
		this.playerStore.subscribe(data => {
			this.playerData = data.currentPlayer;
			this.status = data.status;
			this.totalDiscs = new Array(data.currentPlayer.availableDiscs);
		});
	}

}
