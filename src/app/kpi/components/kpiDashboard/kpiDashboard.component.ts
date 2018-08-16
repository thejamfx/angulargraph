import { Component, OnInit, OnDestroy } from '@angular/core';
import { KpiService } from '../../services/KpiService.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { KpiChartService } from '../../services/KpiChartService.service';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
    selector: 'kpi-dashboard',
    templateUrl: './kpiDashboard.component.html',
    styleUrls: ['./kpiDashboard.component.scss']
})
export class KpiDashboardComponent implements OnInit, OnDestroy {
    public data: any;
    public options: GridsterConfig;
    public dashboard: GridsterItem[];

    private dataSubscription: Subscription;

    static itemChange(item, itemComponent) {
        console.log('itemChanged', item, itemComponent);
    }

    static itemResize(item, itemComponent) {
        console.log('itemResized', item, itemComponent);
    }

    constructor (private kpiService: KpiService, private kpiChartService: KpiChartService) {}

    ngOnInit () {
        this.initializeGridster();
        this.dataSubscription = this.kpiService.getKpiData().pipe(
            map((data) => this.kpiChartService.generateChartData(data))
        ).subscribe((chartData) => this.data = chartData);
    }

    private initializeGridster () {
        this.options = {
            itemChangeCallback: KpiDashboardComponent.itemChange,
            itemResizeCallback: KpiDashboardComponent.itemResize,
        };
        this.dashboard = [
            {cols: 2, rows: 1, y: 0, x: 0},
            {cols: 2, rows: 2, y: 0, x: 2}
        ];
    }

    changedOptions () {
        this.options.api.optionsChanged();
    }

    removeItem (item) {
        this.dashboard.splice(this.dashboard.indexOf(item), 1);
    }

    addItem () {
        //this.dashboard.push();
    }

    ngOnDestroy () {
        this.dataSubscription.unsubscribe();
    }
}
