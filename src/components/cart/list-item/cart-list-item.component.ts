import { Component, Input, OnInit } from '@angular/core';
import { CartListItem } from 'src/model/cartListItem';
import { Image } from 'src/model/imageModel';
import { CartService } from 'src/services/cart/cart.service';

@Component({
	selector: 'cart-list-item',
	templateUrl: './cart-list-item.component.html',
	styleUrls: ['./cart-list-item.component.scss']
})
export class CartListItemComponent implements OnInit {

	@Input() cartListItem:CartListItem;

	constructor(
		private cartService:CartService
	) { }

	ngOnInit(): void {
		
	}

	remove(){
		this.cartService.add(this.cartListItem.good,0);
	}

}
