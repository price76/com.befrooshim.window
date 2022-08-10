import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodListItemComponent } from './good-list-item.component';

describe('GoodListItemComponent', () => {
  let component: GoodListItemComponent;
  let fixture: ComponentFixture<GoodListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
