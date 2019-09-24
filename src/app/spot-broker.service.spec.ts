import { TestBed } from '@angular/core/testing';

import { SpotBrokerService } from './spot-broker.service';

describe('SpotBrokerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotBrokerService = TestBed.get(SpotBrokerService);
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    const service: SpotBrokerService = TestBed.get(SpotBrokerService);
    service.getMacLocation();
  });
});
