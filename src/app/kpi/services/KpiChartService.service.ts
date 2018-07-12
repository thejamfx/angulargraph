import { Injectable } from '@angular/core';
import { ChartFactory } from '../../shared/services/ChartFactory.service';
import { ChartData, ChartDataSet } from '../../shared/shared.types';

@Injectable({
    providedIn: 'root'
})
export class KpiChartService {
    constructor (private chartService: ChartFactory) {}
    public generateChartData (data: any) {
        const chartData = this.buildChartData(data);
        return this.chartService.createBarChart(chartData);
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
        };
        const actualDataset = {
            label: 'actual',
            data: Object.values(data).map((datapoint: any) => datapoint.actual),
            type: 'line'
        };
        return [targetDataset, actualDataset];
    }
}
