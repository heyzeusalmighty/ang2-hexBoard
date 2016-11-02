import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'money-box',
	templateUrl: './money-box.component.html',
	styleUrls: ['./money-box.component.css']
})
export class MoneyBoxComponent implements OnInit {

	@Input() amount: number;
	@Input() colorClass: string;
	constructor() { }

	ngOnInit() {}

}
