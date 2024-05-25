import { TestBed } from '@angular/core/testing';

import { ModeradorServiceService } from './moderador-service.service';

describe('ModeradorServiceService', () => {
  let service: ModeradorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeradorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
