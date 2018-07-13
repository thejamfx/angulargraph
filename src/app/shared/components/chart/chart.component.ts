import { Chart } from 'chart.js';
import { Component, Input, ViewChild, AfterContentInit, ElementRef, OnDestroy, AfterViewChecked } from '@angular/core';
//import { Chart } from '../../shared.types';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterContentInit, OnDestroy, AfterViewChecked {
    public chart: typeof Chart;
    public readonly canvasWidth = 150;
    public readonly canvasHeight = 100;
    @Input() public chartData: any;
    @ViewChild('chartCanvas') chartCanvas: ElementRef;
    ngAfterContentInit () {
        this.chart = new Chart(this.chartCanvas.nativeElement.getContext('2d'), this.chartData);
    }
    ngOnDestroy () {
        this.chart = null;
    }
    ngAfterViewChecked () {
        this.chart.resize();
    }
}
