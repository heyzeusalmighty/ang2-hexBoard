export class Player {
	
    _id: number;
    username: string;
    gameId: number;
    discColor: string;
    currentOrange: number;
    currentBrown: number;    
    currentPink: number;
    orangeIncome: number;
    brownIncome: number;
    pinkIncome: number;
    pass: boolean;
    turnOrder: number;
    totalDiscs: number;
    availableDiscs: number;
    availableColonyShips: number;
    passOrder: number;
    whosTurn: boolean;
    exploreDiscCount: number;
    influenceDiscCount: number;
    researchDiscCount: number;
    upgradeDiscCount: number;
    buildDiscCount: number;
    moveDiscCount: number;
    species: string;

    constructor() {
        
    }    
}
