import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartListItem } from 'src/model/cartListItem';

@Injectable({
  providedIn: 'root'
})
export class ShopApiProviderService {

  constructor(
    private http: HttpClient
  ){}

  getStore(storeId: string):any{
    const url = 'http://api_window_store.befrooshim.com/store/get';
    var headers: HttpHeaders = new HttpHeaders();

		var body: any = {
			storeId: storeId
		};
		return this.http
			.post(url,body,
				{
					headers: headers
				}
			);
	}

	getGoodList(storeId: string):any{
		const url = 'http://api_window_store.befrooshim.com/good/getAll';
    	var headers: HttpHeaders = new HttpHeaders();

		var body: any = {
			storeId: storeId
		};
		return this.http
			.post(url,body,
				{
					headers: headers
				}
			);
	}

	getBlogList(storeId: string):any{
		const url = 'http://api_window_store.befrooshim.com/blog/getAll';
    	var headers: HttpHeaders = new HttpHeaders();

		var body: any = {
			storeId: storeId
		};
		return this.http
			.post(url,body,
				{
					headers: headers
				}
			);
	}

	getGood(goodId: string):any{
		const url = 'http://api_window_store.befrooshim.com/good/get';
    	var headers: HttpHeaders = new HttpHeaders();

		var body: any = {
			goodId: goodId
		};
		return this.http
			.post(url,body,
				{
					headers: headers
				}
			);
	}

	getBlog(blogId: string):any{
		const url = 'http://api_window_store.befrooshim.com/blog/get';
    	var headers: HttpHeaders = new HttpHeaders();

		var body: any = {
			blogId: blogId
		};
		return this.http
			.post(url,body,
				{
					headers: headers
				}
			);
	}

	createOrder(storeId : string,mobileNumber:string,address:string,orderItemList:CartListItem[]):any{
		const url = 'http://api_window_store.befrooshim.com/order/create';
    	var headers: HttpHeaders = new HttpHeaders();

		var body: any = {
			storeId: storeId,
			mobileNumber: mobileNumber,
			address: address,
			orderItemList: orderItemList
		};
		return this.http
			.post(url,body,
				{
					headers: headers
				}
			);
	}

	getToken(mobileNumber : string):any{
		const url = 'http://api_window_store.befrooshim.com/user/getToken';
    	var headers: HttpHeaders = new HttpHeaders();

		var body: any = {
			mobileNumber: mobileNumber,
		};
		return this.http
			.post(url,body,
				{
					headers: headers
				}
			);
	}

	checkToken(userId : string,token: string):any{
		const url = 'http://api_window_store.befrooshim.com/user/checkToken';
    	var headers: HttpHeaders = new HttpHeaders();

		var body: any = {
			userId: userId,
			token: token
		};
		return this.http
			.post(url,body,
				{
					headers: headers
				}
			);
	}



}
