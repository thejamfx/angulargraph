import { TestBed, inject } from '@angular/core/testing';

import { ChartStyleFactory } from './ChartStyleFactory.service';

describe('ChartStyleFactory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartStyleFactory]
    });
  });

  it('should be created', inject([ChartStyleFactory], (service: ChartStyleFactory) => {
    expect(service).toBeTruthy();
  }));
});
