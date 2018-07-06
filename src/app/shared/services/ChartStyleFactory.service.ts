import { Injectable } from '@angular/core';
import { ChartBarStyle } from '../shared.types';

@Injectable({
  providedIn: 'root'
})
export class ChartStyleFactory {
    private getStyle (red: number, green: number, blue: number, alpha: number): string {
        return 'rgba(' + [red, green, blue, alpha].join(', ') + ')';
    }
    public getPinkStyle (): ChartBarStyle {
        return {
            backgroundColor: this.getStyle(255, 99, 132, 0.2),
            borderColor: this.getStyle(255, 99, 132, 1),
            borderWidth: 1
        };
    }
    public getBlueStyle (): ChartBarStyle {
        return {
            backgroundColor: this.getStyle(54, 162, 235, 0.2),
            borderColor: this.getStyle(54, 162, 235, 1),
            borderWidth: 1
        };
    }
    public getYellowStyle (): ChartBarStyle {
        return {
            backgroundColor: this.getStyle(255, 206, 86, 0.2),
            borderColor: this.getStyle(255, 206, 86, 1),
            borderWidth: 1
        };
    }
    public getTealStyle (): ChartBarStyle {
        return {
            backgroundColor: this.getStyle(75, 192, 192, 0.2),
            borderColor: this.getStyle(75, 192, 192, 1),
            borderWidth: 1
        };
    }
    public getPurpleStyle (): ChartBarStyle {
        return {
            backgroundColor: this.getStyle(153, 102, 255, 0.2),
            borderColor: this.getStyle(153, 102, 255, 1),
            borderWidth: 1
        };
    }
    public getOrangeStyle (): ChartBarStyle {
        return {
            backgroundColor: this.getStyle(255, 159, 64, 0.2),
            borderColor: this.getStyle(255, 159, 64, 1),
            borderWidth: 1
        };
    }
}
