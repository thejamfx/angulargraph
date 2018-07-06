import { Injectable } from '@angular/core';
import { ChartData, Chart } from '../shared.types';

@Injectable({
  providedIn: 'root'
})
export class ChartFactory {
    private createChart (type: string, data: ChartData): Chart {
        return { type, data };
    }
    public createBarChart (data: ChartData): Chart {
        const ChartType = 'bar';
        return this.createChart(ChartType, data);
    }
    public createLineChart (data: ChartData): Chart {
        const ChartType = 'Line';
        return this.createChart(ChartType, data);
    }
}
