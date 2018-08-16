import { Injectable } from '@angular/core';
import { ChartFactory } from '../../shared/services/ChartFactory.service';
import { ChartData, ChartDataSet } from '../../shared/shared.types';
import { ChartStyleFactory } from '../../shared/services/ChartStyleFactory.service';

@Injectable({
    providedIn: 'root'
})
export class KpiChartService {
    constructor (private chartFactory: ChartFactory, private chartStyleFactory: ChartStyleFactory) {}
    public generateChartData (data: any) {
        const chartData = this.buildChartData(data);
        return this.chartFactory.createBarChart(chartData);
    }
    private buildChartData (data: any): ChartData {
        return {
            labels: this.buildChartLabels(data),
            datasets: this.buildChartDatasets(data)
        };
    }
    private buildChartLabels (data: any): string[] {
        return Object.keys(data);
    }
    private buildChartDatasets (data: any, type?: string): ChartDataSet[] {
        const targetDataset = {
            label: 'target',
            data: Object.values(data).map((datapoint: any): number => datapoint.target),
            type: 'line',
            ...this.chartStyleFactory.getBlueStyle()
        };
        const actualDataset = {
            label: 'actual',
            data: Object.values(data).map((datapoint: any) => datapoint.actual),
            type: 'line',
            ...this.chartStyleFactory.getPinkStyle()
        };
        return [targetDataset, actualDataset];
    }
}
