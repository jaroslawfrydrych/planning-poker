import { TestBed } from '@angular/core/testing';

import { WaitGuard } from './wait.guard';

describe('WaitGuard', () => {
  let guard: WaitGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WaitGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
