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
	sideWidth: number = 30;
	topBottomWidth: number = 52;



	constructor(private gameService: GameService) { }

	ngOnInit() {
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

}
