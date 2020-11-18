import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCardContainerComponent } from './table-card-container.component';

describe('TableCardContainerComponent', () => {
  let component: TableCardContainerComponent;
  let fixture: ComponentFixture<TableCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
