import { TestBed, inject } from '@angular/core/testing';

import { KpiChartService } from './KpiChartService.service';

describe('KpiChartService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [KpiChartService]
        });
    });

    it('should be created', inject(
        [KpiChartService],
        (service: KpiChartService) => {
            expect(service).toBeTruthy();
        }
    ));
});
