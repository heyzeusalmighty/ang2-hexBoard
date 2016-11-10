import { Component, OnInit, Input } from '@angular/core';

import { MapTile } from '../../models/mapTile';


@Component({
	selector: 'big-hex',
	templateUrl: './big-hex.component.html',
	styleUrls: ['./big-hex.component.css']
})
export class BigHexComponent implements OnInit {

	@Input() tile: MapTile;
	@Input() sideWidth: number;
	@Input() topBottomWidth: number;
	@Input() showDivision: boolean;


	// sideWidth: number = 30;
	// topBottomWidth: number = 52;

	sideWidthString: string;
	topBottomString: string;
	marginTopString: string;
	negMarginRight: string;
	negMarginBottom: string;
	divisionColor: string = 'rgba(255, 255, 255, 0.5)';
	hexColor: string = '#6C6';
	middleWidth = '60px';
	middleHeight = '104px';

	constructor() {}

	ngOnInit()  {

		console.log('hey what sup:: ', this.sideWidth, this.topBottomWidth );
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
		}
	}
}
