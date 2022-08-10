import { Injectable } from '@angular/core';
import { Cart } from 'src/model/cart';
import { CartListItem } from 'src/model/cartListItem';
import { Good } from 'src/model/goodModel';
import { CartItemChangedCallback } from 'src/model/cartItemChangedCallback';

@Injectable({
	providedIn: 'root'
})

export class CartService {

	onCartChangedCallbackMethodList:CartItemChangedCallback[] = [];

	constructor() { }

	addOnCartChangedCallback(callbackMethod :CartItemChangedCallback):void{
		this.onCartChangedCallbackMethodList.push(callbackMethod);
	}

	private getStoreCartStorageKey(storeId: string): string{
		return "STORE_CART_" + storeId;
	}

	private getClearCartObject(storeId:string): any{
		return {
			listItem:[],
			storeId:storeId,
		}
	}

	private createStoreCart(storeId: string):any{
		let initStorageObject = this.getClearCartObject(storeId);
		this.save(storeId, initStorageObject)
		return initStorageObject;
	}

	private save(storeId: string, cart: Cart): void{
		let storeCartStorageKey: string = this.getStoreCartStorageKey(storeId);
		let jsonCart = JSON.stringify(cart);
		localStorage.setItem(storeCartStorageKey,jsonCart);
		this.onCartChangedCallbackMethodList.forEach((currentCallBackMethod:CartItemChangedCallback)=>{
			currentCallBackMethod();
		})
	}

	getStoreCart(storeId: string):Cart{
		let storeCartStorageKey = this.getStoreCartStorageKey(storeId);
		let storeCart = localStorage.getItem(storeCartStorageKey);
		if(storeCart){
			return JSON.parse(storeCart);
		}else{
			return this.createStoreCart(storeId);
		}
	}

	add(good:Good, count : number):void{
		let storeId: string = good.store.toString();
		let storeCart: Cart = this.getStoreCart(storeId);

		if(storeCart.listItem.length == 0 ){
			let newCartListItem: CartListItem = {
				count: count,
				good : good
			}
			storeCart.listItem.push(newCartListItem);
			this.save(storeId,storeCart);
		}else{
			let itemIsInList :boolean = false;
			storeCart.listItem.forEach((currentListItem:CartListItem, index:number)=>
				{
					if(currentListItem.good._id.toString() == good._id.toString()){

						if(count == 0){
							storeCart.listItem.splice(index,1);
						}else{
							currentListItem.count = count;
						}
						itemIsInList = true;
					}
				}
			)
			if(!itemIsInList){
				let newCartListItem: CartListItem = {
					count: count,
					good : good
				}
				storeCart.listItem.push(newCartListItem);
			}
			this.save(storeId,storeCart);
		}
		

		console.log(storeCart);
		


	}

	getGoodCountInCart(good:Good):number{
		let storeId: string = good.store.toString();
		let storeCart: Cart = this.getStoreCart(storeId);
		if(storeCart.listItem.length == 0 ){
			return 0;
		}else{

			let result: any = storeCart.listItem.find((currentListItem:CartListItem)=>
				{
					if(currentListItem.good._id.toString() == good._id.toString()){
						return currentListItem;
					}
				}
			);

			if(result && result.count){
				console.log('asdsd');
				return parseInt(result.count);
			}else{
				return 0;
			}
			
		}
		
	}

	getCountInCart(storeId:string):number {
		let storeCart: Cart = this.getStoreCart(storeId);
		if(storeCart.listItem.length == 0 ){
			return 0;
		}else{
			return storeCart.listItem.length;
		}
		
	}

	clearItemList(storeId:string):void{
		let storeCart: Cart = this.getStoreCart(storeId);
		storeCart.listItem = [];
		this.save(storeId,storeCart);
	}

	remove(good:Good):void{

	}
}
