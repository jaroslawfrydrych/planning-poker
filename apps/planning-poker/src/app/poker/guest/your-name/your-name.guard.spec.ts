import { TestBed } from '@angular/core/testing';

import { YourNameGuard } from './your-name.guard';

describe('YourNameGuard', () => {
  let guard: YourNameGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(YourNameGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
