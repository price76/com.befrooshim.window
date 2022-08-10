import { Injectable } from '@angular/core';
import { ShopApiProviderService } from 'src/provider/shopApi/shop-api-provider.service';

@Injectable({
  providedIn: 'root'
})
export class GoodService {

  constructor(
    private shopApiProvider:ShopApiProviderService
  ) { }

  getAll(storeId: string): any{
    return this.shopApiProvider.getGoodList(storeId);
  }

  get(goodId: string): any{
    return this.shopApiProvider.getGood(goodId);
  }
}
