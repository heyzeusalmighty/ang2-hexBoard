import { TileCounts } from './tileCounts';
import { MapTile } from './mapTile';
import { Player } from './player';
import { MapShip } from './mapShip';
import { TurnStatus } from './status';

export class MapModel {
	counts: TileCounts;
	mapTiles: Array<MapTile>;
	players: Array<Player>;
	ships: Array<MapShip>;
	status: TurnStatus;

	constructor() {
		this.mapTiles = [];
		this.counts = new TileCounts();
		this.players = [];
		this.ships = [];
		this.status = new TurnStatus();
	}

}
