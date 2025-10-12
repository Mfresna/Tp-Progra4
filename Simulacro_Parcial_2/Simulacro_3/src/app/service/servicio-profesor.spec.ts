import { TestBed } from '@angular/core/testing';

import { ServicioProfesor } from './servicio-profesor';

describe('ServicioProfesor', () => {
  let service: ServicioProfesor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioProfesor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
