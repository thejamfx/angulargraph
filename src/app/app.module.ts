import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KpiModule } from './kpi/kpi.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, KpiModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
