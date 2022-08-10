import { Injectable } from '@angular/core';
import { CartListItem } from 'src/model/cartListItem';
import { ShopApiProviderService } from 'src/provider/shopApi/shop-api-provider.service';

@Injectable({
	providedIn: 'root'
})
export class OrderService {

	constructor(
		private shopApiProvider:ShopApiProviderService
	) { }

	createOrder(storeId : string,mobileNumber:string,address:string,orderItemList:CartListItem[]): any{
		return this.shopApiProvider.createOrder(storeId, mobileNumber,address,orderItemList);
	}
}
