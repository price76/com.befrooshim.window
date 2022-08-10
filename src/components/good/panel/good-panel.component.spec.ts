import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodPanelComponent } from './good-panel.component';

describe('GoodPanelComponent', () => {
  let component: GoodPanelComponent;
  let fixture: ComponentFixture<GoodPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
