import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { GameTile } from '../../models/gameTile';
import { MapTile } from '../../models/mapTile';
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
	gameTiles: Array<MapTile>;
	matrix: Array<any>;
	// 1300 pixels
	sideWidth: number = 30;
	topBottomWidth: number = 52;
	selectedHex: string;
	showGrid: boolean = true;
	anyErrors: boolean = false;
	showDivisions: boolean = false;

	playerStore: Observable<any>;
	playerData: Observable<any>;
	gameStore: Observable<any>;
	gameData: Observable<any>;





	constructor(private gameService: GameService) { }

	ngOnInit() {
		this.calculateScreenSize();
		this.getStartingData();		
		// this.buildArray(); 
	}

	getStartingData() {
		
		this.gameStore = this.gameService.getMapStore();
		this.gameStore.subscribe(
			data => {
				this.gameData = data;
				this.gameTiles = data.mapTiles;
				console.log('data', data);
				if (data.mapTiles.length > 0) {
					this.addGameTilesToMatrix();
				}	
			},
			error => this.anyErrors = true,
			() => console.log('kaboom, observable finished cleanly')
		);

	}

	trackRow(index: number): number {
		return index;
	}

	buildArray() {
		this.matrix = [];
		for ( let row = 0; row < this.rowCount; row++) {
			let wholeRow = new Array<GameTile>();
			for (let col = 0; col < this.columnCount; col++ ) {
				wholeRow.push({ x: col, y: row, color: '#6C6' });
			}
			this.matrix.push(wholeRow);
		}

		
	}

	addGameTilesToMatrix() {
		this.matrix = [];
		for ( let row = 0; row < this.rowCount; row++) {
			let wholeRow = new Array<MapTile>();
			for (let col = 0; col < this.columnCount; col++ ) {
				// wholeRow.push({ x: col, y: row });
				let div = this.whatDivAmI(col, row);
				let tile = new MapTile(col, row);
				tile.division = div;
				wholeRow.push(tile);
			}
			this.matrix.push(wholeRow);
		}

		this.gameTiles.forEach(tile => {
			// console.log(tile)
			this.matrix[tile.y][tile.x].occupied = tile.occupied;
		});
	}

	calculateScreenSize() {
		let width = window.innerWidth;
		// side drawer is 120 plus 16px padding
		let actualWidth = width - 140;


		const hexWidth = 30;
		const hexHeight = 52;

		// let ratio = 0.70;
		let ratio = actualWidth / 1300;
		this.sideWidth = hexWidth * ratio;
		this.topBottomWidth = hexHeight * ratio;
		
	}

	hexSelected($event) {
		console.log('event', $event);
		this.selectedHex = $event.value;
		this.showGrid = false;
	}



	whatDivAmI(x, y) {

		if (x < 4 || x > 8 || y < 3 || y > 7) {
			return 3;
		}

		switch (x) {
			case 4:
			case 8:
				if (y < 4 || y > 6) {
					return 3;
				} else {
					return 2;
				}
				
			case 5:
			case 7:
				if (y < 3 || y > 6) {
					return 3;
				} else if (y === 3 || y === 6) {
					return 2;
				} else {
					return 1;
				}
				

			case 6:
				if (y < 3 || y > 7) {
					return 3;
				} else if (y === 3 || y === 7) {
					return 2;
				} else if (y === 4 || y === 6) {
					return 1;
				} else {
					return 0;
				}
				
			default:
				console.warn('div not found', x, y);
		}
		return null;
	}

}
