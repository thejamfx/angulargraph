import { TestBed, inject } from '@angular/core/testing';

import { KpiLoadService } from './KpiLoadService.service';

describe('KpiLoadService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [KpiLoadService]
        });
    });

    it('should be created', inject(
        [KpiLoadService],
        (service: KpiLoadService) => {
            expect(service).toBeTruthy();
        }
    ));
});
