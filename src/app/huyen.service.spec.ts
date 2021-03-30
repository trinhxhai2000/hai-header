import { TestBed } from '@angular/core/testing';

import { HuyenService } from './huyen.service';

describe('HuyenService', () => {
  let service: HuyenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuyenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
