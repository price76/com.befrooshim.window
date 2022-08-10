import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEmptyListComponent } from './blog-empty-list.component';

describe('BlogEmptyListComponent', () => {
  let component: BlogEmptyListComponent;
  let fixture: ComponentFixture<BlogEmptyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogEmptyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogEmptyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
