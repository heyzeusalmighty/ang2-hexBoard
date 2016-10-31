import { Injectable } from '@angular/core';
import { GameTile } from '../models/gameTile';

@Injectable()
export class GameService {

	constructor() { }

	getTiles(): Array<GameTile> {
		return [
			{
				xCoord: 8,
				yCoord: 6,
				color: 'blue'
			},
			{
				xCoord: 6,
				yCoord: 7,
				color: 'red'
			},
			{
				xCoord: 8,
				yCoord: 4,
				color: 'green'
			},
			{
				xCoord: 4,
				yCoord: 6,
				color: 'yellow'
			},
			{
				xCoord: 4,
				yCoord: 4,
				color: 'white'
			},
			{
				xCoord: 6,
				yCoord: 3,
				color: 'black'
			},
			{
				xCoord: 6,
				yCoord: 5,
				color: 'coral'
			}
		];
	}

}
