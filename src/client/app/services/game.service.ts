import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { GameTile } from '../models/gameTile';

@Injectable()
export class GameService {

	private playerUrl = 'http://localhost:3000/api/player';


	constructor(private http: Http) { }

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

	getPlayerData() {
		console.log('getting player data');

		let headers		= new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
		let options		= new RequestOptions({ headers: headers }); // Create a request option

		return this.http.get(this.playerUrl, options)
			// .toPromise()
			// .then(res => res.json());
			.map((res: Response) => res.json());
	}

}
