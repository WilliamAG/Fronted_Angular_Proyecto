export interface dataChart{
    data:number[];
    labels:string[];
    id:string;
    y:boolean
}

export type Tchart = 'bar' | 'doughnut' | 'line' | 'pie'