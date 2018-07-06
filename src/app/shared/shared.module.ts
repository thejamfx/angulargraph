import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [ChartComponent],
    declarations: [ChartComponent]
})
export class SharedModule { }
