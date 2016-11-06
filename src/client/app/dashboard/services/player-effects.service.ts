import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { GameService } from './game.service';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { Actions, Effect } from '@ngrx/effects';

@Injectable()
export class PlayerEffectsService {

	private playerUrl = 'http://localhost:3000/api/player';
	private mapUrl = 'http://localhost:3000/api/map';
	private headers		= new Headers({ 'Content-Type': 'application/json' });
	private options		= new RequestOptions({ headers: this.headers });

	constructor(private http: Http, private actions$: Actions) { }

	@Effect() loadPlayerData$ = this.actions$
		.ofType('GET_PLAYER_DATA')
		.map(action => JSON.stringify(action.payload))
		.switchMap(payload => this.http.get(this.playerUrl))
			.map( res => ({ type: 'GET_PLAYER_DATA_SUCCESS', payload: res.json() }))
			.catch(() => Observable.of({ type: 'GET_PLAYER_DATA_FAILED'}));

	@Effect() loadMapData$ = this.actions$
		.ofType('GET_MAP_DATA')
		.map(action => JSON.stringify(action.payload))
		.switchMap(payload => this.http.get(this.mapUrl))
			.map(res => ({ type: 'GET_MAP_DATA_SUCCESS', payload: res.json() }))
			.catch(() => Observable.of({ type: 'GET_MAP_DATA_FAILED'}));

}
