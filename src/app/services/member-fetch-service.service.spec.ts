import { TestBed } from '@angular/core/testing';

import { MemberFetchServiceService } from './member-fetch-service.service';

describe('MemberFetchServiceService', () => {
  let service: MemberFetchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberFetchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
