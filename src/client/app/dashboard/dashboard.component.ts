import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { GameService } from './services/game.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
	providers: [GameService]
})
export class DashboardComponent implements OnInit {

	playerStore: Observable<any>;
	playerData: Observable<any>;
	gameStore: Observable<any>;
	gameData: Observable<any>;
	
	constructor(
		private router: Router, 
		private route: ActivatedRoute,
		private gameService: GameService) { }

	ngOnInit() {
		this.playerStore = this.gameService.getPlayerStore();
		this.playerStore.subscribe(data => {
			this.playerData = data;
		});

		
	}

	

}
