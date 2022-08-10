import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreNavigationBarComponent } from './store-navigation-bar.component';

describe('StoreNavigationBarComponent', () => {
  let component: StoreNavigationBarComponent;
  let fixture: ComponentFixture<StoreNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreNavigationBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
