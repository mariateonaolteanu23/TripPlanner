import { TestBed } from '@angular/core/testing';

import { ApiLoadingService } from './api-loading.service';

describe('ApiLoadingServiceService', () => {
  let service: ApiLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
