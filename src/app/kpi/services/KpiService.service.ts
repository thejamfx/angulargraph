import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KpiDataService } from './KpiDataService.service';

@Injectable({
    providedIn: 'root'
})
export class KpiService {
    constructor (private kpiDataService: KpiDataService) {}
    public getKpiData (): Observable<any> {
        return this.kpiDataService.getData();
    }
}
