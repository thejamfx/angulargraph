import { Chart } from 'chart.js';
import { Component, Input, ViewChild, AfterContentInit, ElementRef, OnDestroy, AfterViewChecked } from '@angular/core';

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
        this.chartCanvas.nativeElement.onclick = this.onCanvasClick.bind(this);
    }
    ngOnDestroy () {
        this.chart = null;
    }
    ngAfterViewChecked () {
        this.chart.resize();
    }
    public onCanvasClick (event): void {
        console.log('onCanvasClick: ', event);
        const elementAtEvent = this.chart.getElementAtEvent(event);
        const elementsAtEvent = this.chart.getElementsAtEvent(event);
        const datasetAtEvent = this.chart.getDatasetAtEvent(event);
        console.log('elementAtEvent: ', elementAtEvent);
        console.log('elementsAtEvent: ', elementsAtEvent);
        console.log('datasetAtEvent: ', datasetAtEvent);
    }
}
