export interface Chart {
    type: string;
    data: ChartData;
    options?: ChartOptions;
}

export interface ChartData {
    labels: string[];
    datasets: ChartDataSet[];
}

export interface ChartDataSet {
    label: string;
    data: number[];
    type?: string;
    backgroundColor?: string[];
    borderColor?: string[];
    borderWidth?: number;
}

export interface ChartOptions {
    [index: string]: any;
}

export interface ChartBarStyle {
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
}
