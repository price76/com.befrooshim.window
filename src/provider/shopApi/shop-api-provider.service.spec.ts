import { TestBed } from '@angular/core/testing';

import { ShopApiProviderService } from './shop-api-provider.service';

describe('ShopApiProviderService', () => {
  let service: ShopApiProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopApiProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
