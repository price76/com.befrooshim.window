import { Injectable } from '@angular/core';
import { ShopApiProviderService } from 'src/provider/shopApi/shop-api-provider.service';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(
		private shopApiProvider:ShopApiProviderService
	) { }

	getToken(mobileNumber: string): any{
		return this.shopApiProvider.getToken(mobileNumber);
	}

	checkToken(userId : string,token:string): any{
		return this.shopApiProvider.checkToken(userId, token);
	}

	setUserId(userId: string):void{

	}

	getUserId():string{
		return "";
	}

	setMobileNumber(mobileNumber: string):void{

	}

	getMobileNumber():string{
		return "";
	}
}
