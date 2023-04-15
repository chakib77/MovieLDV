import { TestBed } from '@angular/core/testing';

import { RecupFilmsService } from './recup-films.service';

describe('RecupFilmsService', () => {
  let service: RecupFilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecupFilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
