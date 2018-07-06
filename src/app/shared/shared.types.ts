export interface Chart {
    type: string;
    data: ChartData;
    options?: ChartOptions;
}

export interface ChartData {
    [index: string]: any;
}

export interface ChartOptions {
    [index: string]: any;
}

export interface ChartBarStyle {
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
}
