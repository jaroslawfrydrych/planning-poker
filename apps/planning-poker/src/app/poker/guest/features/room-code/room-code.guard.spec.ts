import { TestBed } from '@angular/core/testing';

import { RoomCodeGuard } from './room-code.guard';

describe('RoomCodeGuard', () => {
  let guard: RoomCodeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoomCodeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
