import { TestBed, inject } from '@angular/core/testing';

import { ChartFactory } from './ChartFactory.service';

describe('ChartFactory', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ChartFactory]
        });
    });

    it('should be created', inject([ChartFactory], (service: ChartFactory) => {
        expect(service).toBeTruthy();
    }));
});
