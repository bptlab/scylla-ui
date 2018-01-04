import { TestBed, inject } from '@angular/core/testing';

import { ProcessStatisticsService } from './process-statistics.service';

describe('ProcessStatisticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessStatisticsService]
    });
  });

  it('should be created', inject([ProcessStatisticsService], (service: ProcessStatisticsService) => {
    expect(service).toBeTruthy();
  }));
});
