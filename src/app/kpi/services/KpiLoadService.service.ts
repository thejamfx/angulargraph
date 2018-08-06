import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class KpiLoadService {
    public loadData (): any {
        return {
            dp1: {
                target: 0,
                actual: 0
            },
            dp2: {
                target: this.numberGenerator(),
                actual: this.numberGenerator()
            },
            dp3: {
                target: this.numberGenerator(),
                actual: this.numberGenerator()
            },
            dp4: {
                target: this.numberGenerator(),
                actual: this.numberGenerator()
            },
            dp5: {
                target: this.numberGenerator(),
                actual: this.numberGenerator()
            },
            dp6: {
                target: this.numberGenerator(),
                actual: this.numberGenerator()
            },
            dp7: {
                target: this.numberGenerator(),
                actual: this.numberGenerator()
            }
        };
    }
    private numberGenerator (): number {
        return Math.floor(Math.random() * Math.floor(1000));
    }
}
