import { TestBed } from '@angular/core/testing';

import { MojNalogService } from './moj-nalog.service';

describe('MojNalogService', () => {
  let service: MojNalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MojNalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
