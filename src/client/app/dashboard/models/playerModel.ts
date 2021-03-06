import { TrackTile } from './trackTile';
import { ShipGroup } from './shipGroup';
import { Player } from './player';
import { TurnStatus } from './status';

export class PlayerModel {
	currentPlayer: Player;
	scienceTrack: TrackTile[];
	ships: ShipGroup;
	upgrades: Array<any>;
	status: TurnStatus;

	constructor() {
		this.currentPlayer = new Player();
		this.scienceTrack = [];
		this.ships = new ShipGroup();
		this.upgrades = [];
		this.status = new TurnStatus();
	}
}
