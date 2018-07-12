import { Injectable } from '@angular/core';
import { ChartData, Chart } from '../shared.types';

@Injectable({
  providedIn: 'root'
})
export class ChartFactory {
    private createChart (type: string, data: ChartData): Chart {
        return { type, data,
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        };
    }
    public createBarChart (data: ChartData): Chart {
        const chartType = 'bar';
        return this.createChart(chartType, data);
    }
    public createLineChart (data: ChartData): Chart {
        const chartType = 'Line';
        return this.createChart(chartType, data);
    }
}
