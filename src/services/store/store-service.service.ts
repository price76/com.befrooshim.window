import { Injectable } from '@angular/core';
import { ShopApiProviderService } from 'src/provider/shopApi/shop-api-provider.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private shopApiProvider:ShopApiProviderService
  ) { }

  getStore(storeId: string): any{
    return this.shopApiProvider.getStore(storeId);
  }
}
