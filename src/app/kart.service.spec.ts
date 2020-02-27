import { TestBed } from '@angular/core/testing';

import { KartService } from './kart.service';

describe('KartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KartService = TestBed.get(KartService);
    expect(service).toBeTruthy();
  });
});
