export class MapTile {
	_id: number;
	aliens: number;
	brown: number;
	brownAdvanced: number;
	brownUsed: number;
	division: number;
	gameId: number;
	mapId: number;
	occupied: string;
	orange: number;
	orangeAdvanced: number;
	orangeUsed: number;
	pink: number;
	pinkAdvanced: number;
	pinkUsed: number;
	playerId: number;
	revealed: boolean;
	reward: boolean;
	sortOrder: number;
	victoryPoints: number;
	white: number;
	whiteUsed: number;
	wormholeIndex: number;
	wormholes: Array<number>;
	x: number;
	y: number;
	hasShips: boolean;

	constructor(xCoord: number, yCoord: number) {
		this.x = xCoord;
		this.y = yCoord;
	}
}

