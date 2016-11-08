import { Component, OnInit, Input } from '@angular/core';

import { ColonyShip } from '../../models/colonyShip';

@Component({
	selector: 'colony-ships',
	// templateUrl: './colony-ships.component.html',
	// styleUrls: ['./colony-ships.component.css']
	template: `
		<div class="shipContainer">
			<div *ngFor="let a of ships">
				avail! {{ a.index }} => {{ a.disabled }}
			</div>
		</div>
	`,
	styles: [
		``
	]
})
export class ColonyShipsComponent implements OnInit {

	@Input() ships: Array<ColonyShip>;
	
	// http://stackoverflow.com/questions/21956790/css-cross-through-an-element



	constructor() {


	}

	ngOnInit() {
		// for (let i = 0; i < this._totalShips; i++) {
		// 	let ship = new ColonyShip(i);
		// 	if ( (this.available - 1) < i) {
		// 		ship.disabled = true;
		// 	}
		// 	this.availableShips.push(ship);
		// }
	}
}



