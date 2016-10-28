import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-hex-tile',
	templateUrl: './hex-tile.component.html',
	styleUrls: ['./hex-tile.component.css']
})
export class HexTileComponent implements OnInit {

	@Input() row: number;
	@Input() column: number;
	@Input() color: string;
	@Input() sideWidth: number;
	@Input() topBottomWidth: number;
	
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
		this.marginTopString = ((this.column + 1) % 2 === 0)
			? (this.topBottomWidth + 1) + 'px'
			: '0px';

		this.negMarginRight = '-' + (this.sideWidth * 0.85) + 'px';
		this.negMarginBottom = '-' + (this.topBottomWidth * 0.95) + 'px';
		this.middleWidth = (this.sideWidth * 2) + 'px';
		this.middleHeight = (this.topBottomWidth * 2) + 'px';
	}



	hexClick() {
		console.log('I got clicked :: column ', this.column, ' :: row ', this.row, ' :: color ', this.color);
	}


}
