import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFixedWidthComponent } from './text-fixed-width.component';

describe('TextFixedWidthComponent', () => {
  let component: TextFixedWidthComponent;
  let fixture: ComponentFixture<TextFixedWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextFixedWidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFixedWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
