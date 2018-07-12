import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridsterModule } from 'angular-gridster2';
import { SharedModule } from '../shared/shared.module';
import { KpiDashboardComponent } from './components/kpiDashboard/kpiDashboard.component';

@NgModule({
    imports: [CommonModule, GridsterModule, SharedModule],
    exports: [KpiDashboardComponent],
    declarations: [KpiDashboardComponent]
})
export class KpiModule {}
