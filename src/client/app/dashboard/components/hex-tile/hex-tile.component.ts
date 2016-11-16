import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GameTile } from '../../models/gameTile';
import { MapTile } from '../../models/mapTile';

@Component({
	selector: 'app-hex-tile',
	templateUrl: './hex-tile.component.html',
	styleUrls: ['./hex-tile.component.css']
})
export class HexTileComponent implements OnInit {

	@Input() tile: MapTile;
	@Input() sideWidth: number;
	@Input() topBottomWidth: number;
	@Input() showDivision: boolean;
	@Output() hexSelected = new EventEmitter();
	
	sideWidthString: string;
	topBottomString: string;
	marginTopString: string;
	negMarginRight: string;
	negMarginBottom: string;
	divisionColor: string = 'rgba(255, 255, 255, 0.5)';
	hexColor: string = '#6C6';
	middleWidth = '60px';
	middleHeight = '104px';
	cursor = 'arrow';
	victoryPoints: string = '';


	constructor() { }

	ngOnInit() {
		this.sideWidthString = this.sideWidth + 'px';
		this.topBottomString = this.topBottomWidth + 'px';
		// This is for calculating even rows
		this.marginTopString = ((this.tile.x + 1) % 2 === 0)
			? (this.topBottomWidth + 1) + 'px'
			: '0px';


		this.negMarginRight = '-' + (this.sideWidth * 0.85) + 'px';
		this.negMarginBottom = '-' + (this.topBottomWidth * 0.95) + 'px';
		this.middleWidth = (this.sideWidth * 2) + 'px';
		this.middleHeight = (this.topBottomWidth * 2) + 'px';

		

		if (this.tile.occupied) {	
			this.hexColor = this.tile.occupied;
			if (this.tile.occupied === 'white' || this.tile.occupied === 'yellow' ) {
				this.divisionColor = 'rgba(0, 0, 0, 0.5)';
			}
			this.cursor = 'pointer';
			this.victoryPoints = this.tile.victoryPoints.toString();
		}

		
	}



	hexClick() {
		this.hexSelected.emit({ value: this.tile });
		console.log('I got clicked :: column ', this.tile.y, ' :: row ', this.tile.x, ' :: color ', this.tile.occupied);
	}

	


}
