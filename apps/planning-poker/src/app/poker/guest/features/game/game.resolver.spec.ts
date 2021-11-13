import { TestBed } from '@angular/core/testing';

import { GameResolver } from './game.resolver';

describe('GameService', () => {
  let service: GameResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
