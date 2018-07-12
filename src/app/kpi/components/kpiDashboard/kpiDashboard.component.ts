import { Component, OnInit, OnDestroy } from '@angular/core';
import { KpiService } from '../../services/KpiService.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { KpiChartService } from '../../services/KpiChartService.service';

@Component({
    selector: 'kpi-dashboard',
    templateUrl: './kpiDashboard.component.html',
    styleUrls: ['./kpiDashboard.component.css']
})
export class KpiDashboardComponent implements OnInit, OnDestroy {
    public data: any;
    private dataSubscription: Subscription;
    constructor (private kpiService: KpiService, private kpiChartService: KpiChartService) {}

    ngOnInit () {
        this.dataSubscription = this.kpiService.getKpiData().pipe(
            map((data) => this.kpiChartService.generateChartData(data))
        ).subscribe((chartData) => {
            this.data = chartData;
        });
    }

    ngOnDestroy () {
        this.dataSubscription.unsubscribe();
    }
}
