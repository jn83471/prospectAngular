import { TestBed } from '@angular/core/testing';

import { UrlPeticionsService } from './url-peticions.service';

describe('UrlPeticionsService', () => {
  let service: UrlPeticionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlPeticionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
