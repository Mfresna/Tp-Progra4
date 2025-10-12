import { TestBed } from '@angular/core/testing';

import { ServiceAuto } from './service-auto';

describe('ServiceAuto', () => {
  let service: ServiceAuto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAuto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
