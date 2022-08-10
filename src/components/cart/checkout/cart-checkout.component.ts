import { compileFactoryFunction } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartListItem } from 'src/model/cartListItem';
import { CartService } from 'src/services/cart/cart.service';
import { OrderService } from 'src/services/order/order.service';
import { UserService } from 'src/services/user/user.service';

@Component({
	selector: 'app-cart-checkout',
	templateUrl: './cart-checkout.component.html',
	styleUrls: ['./cart-checkout.component.scss']
})
export class CartCheckoutComponent implements OnInit {

	storeId: string;
	mobileNumber: string;
	address: string;
	confirmationCode: string;
	userId: string;

	constructor(
		private userService: UserService,
		private orderService:OrderService,
		private route: ActivatedRoute,
		private cartService: CartService
	) { }

	setMobileNumber(mobileNumber: string):void{
		this.mobileNumber = mobileNumber;
	}

	setAddress(address: string): void{
		this.address = address;
	}

	setConfirmationCode(confirmationCCode:string):void{
		this.confirmationCode = confirmationCCode;
	}

	isValidCheckout():boolean{
		let result: boolean = false;
		if(this.mobileNumber && this.address){
			result = true;
		}
		return result;
	}

	isValidConfrimationCode():boolean{
		let result: boolean = false;
		if(this.confirmationCode)	{
			result = true;
		}
		return result;
	}

	ngOnInit(): void {
		if(this.route && this.route.parent){
			this.route.parent.params
				.subscribe(params => 
					{
						let storeId: string = params['id']; 
						if(storeId){
							this.storeId = storeId;
						}
						
					}
				);
	}
	}

	goToConfimCodeView(){

	}

	getToken(){
		this.userService.setMobileNumber(this.mobileNumber);
		this.userService.getToken(this.mobileNumber)
			.subscribe((data:any)=>{
				console.log(data);
				let userId = data.userId;
				this.userId = userId;
				this.userService.setUserId(userId);
			});
	}

	checkToken(){
		this.userService.checkToken(this.userId,this.confirmationCode)
			.subscribe((data:any) => {
				console.log(data);
				if(data.type == true){
					this.createOrder();
				}
			})
	}

	createOrder(){
		let cartListItemList: CartListItem[] = this.cartService.getStoreCart(this.storeId).listItem;
		this.orderService.createOrder(this.storeId,this.mobileNumber,this.address,cartListItemList)
			.subscribe((data:any) => 
				{
					console.log(data);
					this.cartService.clearItemList(this.storeId);
				}
			)
	}

}
