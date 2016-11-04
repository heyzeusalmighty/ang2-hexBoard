import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { GameTile } from '../../models/gameTile';
import { GameService } from '../../services/game.service';

@Component({
	selector: 'app-hex-grid',
	templateUrl: './hex-grid.component.html',
	styleUrls: ['./hex-grid.component.css']
})
export class HexGridComponent implements OnInit {

	columnCount = 13;
	rowCount = 11;
	// columns = new Array(11);
	// rows = new Array(8);
	hexColor = '#6C6';
	gameTiles: Array<GameTile>;
	matrix: Array<any>;
	// 1300 pixels
	sideWidth: number = 30;
	topBottomWidth: number = 52;
	selectedHex: string;
	showGrid: boolean = true;

	playerStore: Observable<any>;
	playerData: Observable<any>;




	constructor(private gameService: GameService) { }

	ngOnInit() {
		this.calculateScreenSize();
		this.getStartingData();
	}

	getStartingData() {
		this.gameTiles = this.gameService.getTiles();
		this.buildArray();
		this.playerStore = this.gameService.getPlayerStore();
		this.playerStore.subscribe(data => {
			this.playerData = data;
		});



		// this.gameService.getPlayerData()
		// 	.subscribe(
		// 		data => this.playerData = data
		// 	)
	}

	trackRow(index: number): number {
		return index;
	}

	buildArray() {
		this.matrix = [];
		for ( let row = 0; row < this.rowCount; row++) {
			let wholeRow = new Array<GameTile>();
			for (let col = 0; col < this.columnCount; col++ ) {
				wholeRow.push({ xCoord: col, yCoord: row, color: '#6C6' });
			}
			this.matrix.push(wholeRow);
		}

		this.gameTiles.forEach(tile => {
			this.matrix[tile.yCoord][tile.xCoord].color = tile.color;
		});
	}

	calculateScreenSize() {
		let width = window.innerWidth;
		console.log('inner width ', width, (width - 140));
		// side drawer is 120 plus 16px padding
		let actualWidth = width - 140;


		const hexWidth = 30;
		const hexHeight = 52;

		// let ratio = 0.70;
		let ratio = actualWidth / 1300;
		this.sideWidth = hexWidth * ratio;
		this.topBottomWidth = hexHeight * ratio;
		

		// if (width >= 1300) {
		// 	// 30 - 52
		// 	this.sideWidth = 22.5;
		// 	this.topBottomWidth = 39;
		// } else {
		// 	// let ratio = width / 1300;
		// 	// this.sideWidth = 30 * ratio;
		// 	// this.topBottomWidth = 52 * ratio;
		// 	this.sideWidth = 22.5;
		// 	this.topBottomWidth = 39;
		// }
	}

	hexSelected($event) {
		console.log('event', $event);
		this.selectedHex = $event.value;
		this.showGrid = false;
	}

}
