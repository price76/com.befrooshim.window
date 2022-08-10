import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodEmptyListComponent } from './good-empty-list.component';

describe('GoodEmptyListComponent', () => {
  let component: GoodEmptyListComponent;
  let fixture: ComponentFixture<GoodEmptyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodEmptyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodEmptyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
