import { Injectable } from '@angular/core';
import { ShopApiProviderService } from 'src/provider/shopApi/shop-api-provider.service';

@Injectable({
	providedIn: 'root'
})

export class BlogService {

	constructor(
		private shopApiProvider:ShopApiProviderService
	) { }

	getAll(storeId: string): any{
		return this.shopApiProvider.getBlogList(storeId);
	}

	get(blogId: string): any{
		return this.shopApiProvider.getBlog(blogId);
	}
}
