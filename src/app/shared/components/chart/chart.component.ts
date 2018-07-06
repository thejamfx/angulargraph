import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
    public readonly canvasWidth = 800;
    public readonly canvasHeight = 600;
    @ViewChild('chartCanvas') chartCanvas: HTMLCanvasElement;
    ngOnInit () {}
}
