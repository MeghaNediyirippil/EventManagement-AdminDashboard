import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewGraphComponent } from './review-graph.component';

describe('ReviewGraphComponent', () => {
  let component: ReviewGraphComponent;
  let fixture: ComponentFixture<ReviewGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewGraphComponent]
    });
    fixture = TestBed.createComponent(ReviewGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
