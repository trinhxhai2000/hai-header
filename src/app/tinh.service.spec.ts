import { TestBed } from '@angular/core/testing';

import { TinhService } from './tinh.service';

describe('TinhService', () => {
  let service: TinhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TinhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
