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
}