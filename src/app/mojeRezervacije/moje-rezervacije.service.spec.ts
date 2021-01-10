import { TestBed } from '@angular/core/testing';

import { MojeRezervacijeService } from './moje-rezervacije.service';

describe('MojeRezervacijeService', () => {
  let service: MojeRezervacijeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MojeRezervacijeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
