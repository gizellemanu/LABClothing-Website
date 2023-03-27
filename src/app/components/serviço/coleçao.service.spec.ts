import { TestBed } from '@angular/core/testing';

import { ColeçaoService } from './coleçao.service';

describe('ColeçaoService', () => {
  let service: ColeçaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColeçaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
