import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSymbolComponent } from './card-symbol.component';

describe('CardSymbolComponent', () => {
  let component: CardSymbolComponent;
  let fixture: ComponentFixture<CardSymbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSymbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
