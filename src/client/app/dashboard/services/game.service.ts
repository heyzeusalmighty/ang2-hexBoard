import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { GameTile } from '../models/gameTile';
import { PlayerModel } from '../models/playerModel';
import { GET_PLAYER_DATA } from '../reducers/player.reducer';

@Injectable()
export class GameService {

	private playerUrl = 'http://localhost:3000/api/player';
	playerStore: Observable<any>;
	playerData: PlayerModel;



	constructor(private http: Http, private store: Store<any>) {
		this.playerStore = store.select('player');
		this.playerStore.subscribe(data => {
			this.playerData = data;
		});

		this.getPlayerData();
	}

	getPlayerStore(): Observable<any> {
		return this.playerStore;
	}

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
		this.store.dispatch({ type: GET_PLAYER_DATA });
	}

	// getPlayerData(): Observable<PlayerModel> {
	// 	console.log('getting player data');

	// 	let headers		= new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
	// 	let options		= new RequestOptions({ headers: headers }); // Create a request option

	// 	return this.http.get(this.playerUrl, options)
	// 		// .toPromise()
	// 		// .then(res => res.json());
	// 		.map((res: Response) => res.json());
	// }

}
