import { TestBed } from '@angular/core/testing';

import { WaycarbonLibService } from './waycarbon-lib.service';

describe('WaycarbonLibService', () => {
  let service: WaycarbonLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaycarbonLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
