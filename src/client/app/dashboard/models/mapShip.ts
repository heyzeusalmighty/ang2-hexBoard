import { ShipComponent, ShipStats } from './ship';

export class MapShip {
    color: string;
    modelId: number;
    playerId: number;
    shipId: number;
    shipType: string;
    xCoords: number;
    yCoords: number;
    stats: ShipStats;
    components: Array<ShipComponent>;
}