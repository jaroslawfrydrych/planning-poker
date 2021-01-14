import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGameResultsReviewComponent } from './modal-game-results-review.component';

describe('ModalGameResultsReviewComponent', () => {
  let component: ModalGameResultsReviewComponent;
  let fixture: ComponentFixture<ModalGameResultsReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGameResultsReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGameResultsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
