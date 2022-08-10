import { Component, Input, OnInit } from '@angular/core';
import { CartListItem } from 'src/model/cartListItem';
import { Good } from 'src/model/goodModel';
import { CartService } from 'src/services/cart/cart.service';

@Component({
  selector: 'cart-add-to-button',
  templateUrl: './cart-add-to-button.component.html',
  styleUrls: ['./cart-add-to-button.component.scss']
})
export class CartAddToButtonComponent implements OnInit {

	@Input() good:Good;
	count:number;

	constructor(
		private cartService:CartService
	) { }

	setCount(count:number){
		this.cartService.add(this.good, count);
		this.count = this.cartService.getGoodCountInCart(this.good);
	}

	ngOnInit(): void {
		this.count = this.cartService.getGoodCountInCart(this.good);
	}

}
