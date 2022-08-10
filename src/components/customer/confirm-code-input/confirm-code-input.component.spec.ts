import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCodeInputComponent } from './confirm-code-input.component';

describe('ConfirmCodeInputComponent', () => {
  let component: ConfirmCodeInputComponent;
  let fixture: ComponentFixture<ConfirmCodeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmCodeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCodeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
