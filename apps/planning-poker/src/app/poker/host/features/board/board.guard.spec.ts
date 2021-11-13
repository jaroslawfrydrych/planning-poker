import { TestBed } from '@angular/core/testing';

import { BoardGuard } from './board.guard';

describe('BoardGuard', () => {
  let guard: BoardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BoardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
