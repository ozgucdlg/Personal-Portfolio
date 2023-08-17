import { TestBed } from '@angular/core/testing';

import { UserrService } from './userr.service';

describe('UserrService', () => {
  let service: UserrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
