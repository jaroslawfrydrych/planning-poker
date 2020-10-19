import { TestBed } from '@angular/core/testing';

import { CopyToClipboardService } from './copy-to-clipboard.service';

describe('CopyToClipboardService', () => {
  let service: CopyToClipboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopyToClipboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
