import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
	selector: 'app-game-screen',
	templateUrl: './game-screen.component.html',
	styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {

	@ViewChild('gameScreen') canvasRef: ElementRef;
	private canvas: any;
	@Input() width: number;
	@Input() height: number;

	private radius: number = 50;
	private columns: number = 11;
	private rows: number = 8;

	private hexHeight = Math.sqrt(3) * this.radius;
	private hexWidth = this.radius * 2;
	private hexSide = (3 / 2) * this.radius;

	private hexStroke = '#003432';
	private hexFill = 'rgba(103,155,153,0.2)';




	constructor() { }

	ngOnInit() {
	}

	ngAfterViewInit() {
		this.canvas = this.canvasRef.nativeElement;
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.drawHexGrid();
	}


	drawHexGrid() {
		if (this.canvas.getContext) {
			// const c = this.canvas.getContext('2d');
			// this.drawHex(100, 100);

			let offsetColumn = false;
			let currentX;
			let currentY;

			for (let col = 0; col < this.columns; col++) {
				for (let row = 0; row < this.rows; row++) {

					currentX = (col * this.hexSide) + this.radius;
					currentY = (offsetColumn)
						? (row * this.hexHeight) + this.radius + (this.hexHeight * 0.5)
						: (row * this.hexHeight)  + this.radius;

					this.drawHex(currentX, currentY);

				}
				offsetColumn = !offsetColumn;
			}



		}
	}

	drawHex(x0: number, y0: number) {
		if (this.canvas.getContext) {
			const c = this.canvas.getContext('2d');
			c.fillStyle = this.hexFill;
			c.lineWidth = 2;
			c.strokeStyle = this.hexStroke;
			c.beginPath();
			c.moveTo(x0 + this.hexWidth - this.hexSide, y0);
			c.lineTo(x0 + this.hexSide, y0);
			c.lineTo(x0 + this.hexWidth, y0 + (this.hexHeight / 2));
			c.lineTo(x0 + this.hexSide, y0 + this.hexHeight);
			c.lineTo(x0 + this.hexWidth - this.hexSide, y0 + this.hexHeight);
			c.lineTo(x0, y0 + (this.hexHeight / 2));
			c.closePath();
			c.stroke();
			c.fill();

		}

	}


	canvasClicking($event) {
		console.log('clicked canvas => ', $event)
	}

}
