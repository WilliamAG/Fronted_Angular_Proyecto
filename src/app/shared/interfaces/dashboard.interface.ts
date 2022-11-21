export interface dataStatic {
    ok: boolean;
    msg: string;
}

export interface dataDate {
    firstDate:string,
    lastDate:string
}

export interface getDataChart {
    labels: string[], 
    data: number[], 
    up: limit, 
    down: limit
}

export interface limit {
    label: string,
    value: number
}