import { Component, Input, OnInit } from '@angular/core';
import { CartListItem } from 'src/model/cartListItem';

@Component({
	selector: 'cart-list',
	templateUrl: './cart-list.component.html',
	styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

	@Input() cartListItemList:CartListItem[];
	constructor() { }

	ngOnInit(): void {
	}

}
