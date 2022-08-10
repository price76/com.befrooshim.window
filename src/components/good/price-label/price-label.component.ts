import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'price-label',
	templateUrl: './price-label.component.html',
	styleUrls: ['./price-label.component.scss']
})
export class PriceLabelComponent implements OnInit {

	@Input() price: number;
	priceText: string;
	isRiyalCurrency: boolean;

	constructor() { }

	ngOnInit(): void {
		this.priceText = this.price.toLocaleString('fa-IR')
	}

}
