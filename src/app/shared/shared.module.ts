import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './components/chart/chart.component';
import { ChartSettingsComponent } from './components/chart-settings/chart-settings.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [ChartComponent],
    declarations: [ChartComponent, ChartSettingsComponent]
})
export class SharedModule { }
