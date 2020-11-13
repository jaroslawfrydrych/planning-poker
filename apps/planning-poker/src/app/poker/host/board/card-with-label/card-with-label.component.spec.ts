import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithLabelComponent } from './card-with-label.component';

describe('CardWithLabelComponent', () => {
  let component: CardWithLabelComponent;
  let fixture: ComponentFixture<CardWithLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWithLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWithLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
