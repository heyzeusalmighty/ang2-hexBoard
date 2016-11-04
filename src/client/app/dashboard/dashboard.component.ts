import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GameService } from './services/game.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
	providers: [GameService]
})
export class DashboardComponent implements OnInit {

	constructor(private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {
	}

	sideLinkPress(link: string) {

		console.log('route => ', this.route, ' => ', link);
		this.router.navigate(['../' + link], { relativeTo: this.route });
	}

}
