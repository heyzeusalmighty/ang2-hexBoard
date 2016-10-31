import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GameTile } from '../models/gameTile';

@Component({
	selector: 'app-hex-tile',
	templateUrl: './hex-tile.component.html',
	styleUrls: ['./hex-tile.component.css']
})
export class HexTileComponent implements OnInit {

	@Input() tile: GameTile;
	@Input() sideWidth: number;
	@Input() topBottomWidth: number;
	@Output() hexSelected = new EventEmitter();
	
	sideWidthString: string;
	topBottomString: string;
	marginTopString: string;
	negMarginRight: string;
	negMarginBottom: string;
	middleWidth = '60px';
	middleHeight = '104px';


	constructor() { }

	ngOnInit() {
		this.sideWidthString = this.sideWidth + 'px';
		this.topBottomString = this.topBottomWidth + 'px';
		// This is for calculating even rows
		this.marginTopString = ((this.tile.xCoord + 1) % 2 === 0)
			? (this.topBottomWidth + 1) + 'px'
			: '0px';

		this.negMarginRight = '-' + (this.sideWidth * 0.85) + 'px';
		this.negMarginBottom = '-' + (this.topBottomWidth * 0.95) + 'px';
		this.middleWidth = (this.sideWidth * 2) + 'px';
		this.middleHeight = (this.topBottomWidth * 2) + 'px';
	}



	hexClick() {
		this.hexSelected.emit({ value: this.tile.color });
		console.log('I got clicked :: column ', this.tile.yCoord, ' :: row ', this.tile.xCoord, ' :: color ', this.tile.color);
	}


}
