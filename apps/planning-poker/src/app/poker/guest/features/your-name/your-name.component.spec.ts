import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourNameComponent } from './your-name.component';

describe('YourNameComponent', () => {
  let component: YourNameComponent;
  let fixture: ComponentFixture<YourNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
