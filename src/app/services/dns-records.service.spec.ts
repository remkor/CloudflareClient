import { TestBed } from '@angular/core/testing';

import { DnsRecordsService } from './dns-records.service';

describe('DnsRecordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DnsRecordsService = TestBed.get(DnsRecordsService);
    expect(service).toBeTruthy();
  });
});
