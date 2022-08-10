import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodHomeComponent } from './good-home.component';

describe('GoodHomeComponent', () => {
  let component: GoodHomeComponent;
  let fixture: ComponentFixture<GoodHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
