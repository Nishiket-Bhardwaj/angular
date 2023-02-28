import { TestBed } from '@angular/core/testing';

import { CSRService } from './csr.service';

describe('CSRService', () => {
  let service: CSRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CSRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
