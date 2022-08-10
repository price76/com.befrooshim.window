import { Component, Input, OnInit } from '@angular/core';
import { CartListItem } from 'src/model/cartListItem';
import { CartService } from 'src/services/cart/cart.service';

@Component({
	selector: 'cart-panel',
	templateUrl: './cart-panel.component.html',
	styleUrls: ['./cart-panel.component.scss']
})
export class CartPanelComponent implements OnInit {

	cartListItemList:CartListItem[];

	@Input() storeId: string;
	constructor(
		private cartService:CartService
	) { }

	ngOnInit(): void {
		this.getCartItemList();
		this.cartService.addOnCartChangedCallback(this.onCartItemChanged);
	}

	getCartItemList():void{
		this.cartListItemList = this.cartService.getStoreCart(this.storeId).listItem;
	}

	onCartItemChanged = () => {
		console.log('cart cahnged');
		this.getCartItemList();
	  }

}
