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
        this.availableColonyShips = 3;
        this.currentOrange = 0;
        this.currentBrown = 0;
        this.currentPink = 0;
        this.orangeIncome = 0;
        this.brownIncome = 0;
        this.pinkIncome = 0;
    }    
}
