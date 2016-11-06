export class Ship {
    _id: number;
    compartments: number;
    components: ShipComponent[];
    modelName: string;
    initiative: number;
    computers: number;
    drive: number;
    hullPoints: number;
    powerAvailable: number;
    powerConsumption: number;
    shields: number;
    yellowDice: number;
    orangeDice: number;
    redDice: number;
}


export class ShipComponent {
    componentId: number;
    name: string;
    power: number;
    powerCost: number;
    position: number;
    hullPoints: number;
    yellowDice: number;
    orangeDice: number;
    redDice: number;
    missiles: number;
    shields: number;
    computers: number;
    drive: number;
    initiative: number;
    imageUrl: string;
}

export class ShipStats {
    computers: number;
    drive: number;
    hullPoints: number;
    initiative: number;
    orangeDice: number;
    powerAvailable: number;
    powerConsumption: number;
    redDice: number;
    shields: number;
    yellowDice: number;
}