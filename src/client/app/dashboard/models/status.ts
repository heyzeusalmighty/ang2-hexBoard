export class TurnStatus {
    _id: number;
    playerId: number;
    playerName: string;
    gameId: number;
    turnStarted: boolean;
    action: string;
    turnOver: boolean;
    mapId: number;
    pass: boolean;
    exTileChosen: boolean;
    exInfluenced: boolean;
    exRewardRevealed: boolean;
    exRewardChosen: boolean;
    exResourceSet: boolean;
    influenceStarted: boolean;
    influenceOne: boolean;
    influenceTwo: boolean;
    researchTileChosen: boolean;
}