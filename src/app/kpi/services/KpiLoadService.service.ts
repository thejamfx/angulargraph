import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class KpiLoadService {
    constructor () {}
    public loadData (): any {
        return {
            dp1: {
                target: 100,
                actual: 90
            },
            dp2: {
                target: 200,
                actual: 190
            },
            dp3: {
                target: 300,
                actual: 290
            },
            dp4: {
                target: 400,
                actual: 390
            },
            dp5: {
                target: 500,
                actual: 490
            },
            dp6: {
                target: 600,
                actual: 590
            },
            dp7: {
                target: 700,
                actual: 690
            }
        };
    }
}
