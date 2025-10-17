import { TestBed } from '@angular/core/testing';

import { ServiceMoto } from './service-moto';

describe('ServiceMoto', () => {
  let service: ServiceMoto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMoto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
