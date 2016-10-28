import { Component, OnInit } from '@angular/core';

import { GameTile } from '../models/gameTile';
import { GameService } from '../game.service';

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



	constructor(private gameService: GameService) { }

	ngOnInit() {
		this.calculateScreenSize();
		this.getStartingData();
	}

	getStartingData() {
		this.gameTiles = this.gameService.getTiles();
		this.buildArray();
	}

	trackRow(index: number): number {
		return index;
	}

	buildArray() {
		this.matrix = [];
		for ( let row = 0; row < this.rowCount; row++) {
			let wholeRow = [];
			for (let col = 0; col < this.columnCount; col++ ) {
				wholeRow.push({ x: col, y: row, color: '#6C6' });
			}
			this.matrix.push(wholeRow);
		}

		this.gameTiles.forEach(tile => {
			this.matrix[tile.yCoord][tile.xCoord].color = tile.color;
		});
	}

	calculateScreenSize() {
		let width = window.innerWidth;

		if (width >= 1300) {
			this.sideWidth = 30;
			this.topBottomWidth = 52;
		} else {
			let ratio = width / 1300;
			this.sideWidth = 30 * ratio;
			this.topBottomWidth = 52 * ratio;
		}
		// } else if (width >= 800) {
		// 	this.sideWidth = 18.5;
		// 	this.topBottomWidth = 32;
		// } else if (width < 500) {
		// 	this.sideWidth = 8.64;
		// 	this.topBottomWidth = 15;
		// }

	}

}
