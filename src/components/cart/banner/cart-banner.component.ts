import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cart-banner',
  templateUrl: './cart-banner.component.html',
  styleUrls: ['./cart-banner.component.scss']
})
export class CartBannerComponent implements OnInit {

  count: number = 0;
  storeId: string;

  constructor(
    private cartService:CartService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if(this.route && this.route.parent){
			this.route.params
				.subscribe(params => 
					{
						let storeId: string = params['id']; 
						if(storeId){
						this.storeId = storeId;
						this.getCountInCart();
						}
						
					}
				);
	}
    this.cartService.addOnCartChangedCallback(this.onCartItemChanged);
  }

  onCartItemChanged = () => {
    console.log('cart cahnged');
    this.count = this.cartService.getCountInCart(this.storeId);
  }

  getCountInCart(){
    this.count = this.cartService.getCountInCart(this.storeId);
  }

}
