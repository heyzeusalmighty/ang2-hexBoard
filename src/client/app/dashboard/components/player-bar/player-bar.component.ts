import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { PlayerModel } from '../../models/playerModel';
import { GameService } from '../../services/game.service';

import { ColonyShip } from '../../models/colonyShip';

@Component({
	selector: 'player-bar',
	templateUrl: './player-bar.component.html',
	styleUrls: ['./player-bar.component.css']
})
export class PlayerBarComponent implements OnInit {

	playerStore: Observable<any>;
	playerData: Observable<PlayerModel> = null;

	mapStore: Observable<any>;
	mapData: Observable<any>;

	status: Observable<any>;
	totalDiscs: Array<any> = [];

	colonyShips: Array<ColonyShip>;
	_totalShips: number = 3;

	constructor(private gameService: GameService) { }

	ngOnInit() {
		this.getPlayerData();
	}

	getPlayerData() {
		this.playerStore = this.gameService.getPlayerStore();
		this.playerStore.subscribe(data => {
			this.playerData = data.currentPlayer;
			this.status = data.status;

			if (data.currentPlayer && data.currentPlayer.availableDiscs) {
				// this.totalDiscs = new Array(data.currentPlayer.availableDiscs);
				this.totalDiscs = [];
				let usedDiscs = data.currentPlayer.totalDiscs - data.currentPlayer.availableDiscs;
				let total = data.currentPlayer.totalDiscs;

				for (let i = total; i >= 1; i--) {
					this.totalDiscs.push({ number: i, available: (i <= usedDiscs )});
				}

			}

			if (data.currentPlayer && data.currentPlayer.availableColonyShips) {
				this.colonyShips = [];
				for (let i = 0; i < this._totalShips; i++) {
					let ship = new ColonyShip(i);
					if ( (data.currentPlayer.availableColonyShips - 1) < i) {
						ship.disabled = true;
					}
					this.colonyShips.push(ship);
				}
			}
		});

		this.mapStore = this.gameService.getMapStore();
		this.mapStore.subscribe(data => this.mapData = data);
	}

}
