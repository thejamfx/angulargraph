import { Injectable } from '@angular/core';
import { KpiLoadService } from './KpiLoadService.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class KpiDataService {
    constructor (private kpiLoadService: KpiLoadService) {}
    public getData (): Observable<any> {
        return of(this.kpiLoadService.loadData());
    }
}
