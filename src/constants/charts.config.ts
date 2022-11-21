

const colorBar: string[] = ['rgba(126, 225, 252, 0.7)', 'rgba(183,184,230, 0.7)'];
const borderColorLine: string = 'rgb(183,184,230)';
const pointBackgroundColor: string = 'rgb(190,190,255)';
const colorDoughnut: string[] = [
    'rgb(241,156,162)',
    'rgb(150,136,191)',
    'rgb(141,212,246)',
    'rgb(213,227,158)',
    'rgb(250,205,146)',
    'rgb(240,153,124)',
    'rgb(243,236,220)',
    'rgb(201,153,193)',
    'rgb(149,178,220)',
    'rgb(152,205,158)',
    'rgb(253,246,158)',
    'rgb(245,182,139)',
];

export class configChart {

    private labels: string[]
    private data: number[]
    private label: string
    private type: 'bar' | 'doughnut' | 'line' | 'pie'
    private showLabelsX: boolean
    private showLabelsY: boolean

    constructor(labels: string[], data: number[], label: string, type: 'bar' | 'doughnut' | 'line' | 'pie', showLabelsX: boolean, showLabelsY: boolean) {
        this.labels = labels;
        this.data = data;
        this.label = label;
        this.type = type;
        this.showLabelsX = showLabelsX
        this.showLabelsY = showLabelsY
    }

    public Bar = () => {
        return {
            labels: this.labels,
            datasets: [
                {
                    label: this.label,
                    data: this.data,
                    backgroundColor:
                        this.type == 'bar'
                            ? colorBar
                            : this.type == 'doughnut' || this.type == 'pie'
                                ? colorDoughnut
                                : this.type == 'line'
                                    ? 'rgba(100,100,200,.2)'
                                    : '',
                    borderColor:
                        this.type == 'line'
                            ? borderColorLine
                            : this.type == 'doughnut' || this.type == 'pie'
                                ? 'rgba(0,0,0,0)'
                                : '',
                },
            ],
        };
    }

    public line = () => {
        return {
            labels: this.labels,
            datasets: [
                {
                    label: this.label,
                    data: this.data,
                    tension: 0.3,
                    backgroundColor:
                        this.type == 'bar'
                            ? colorBar
                            : this.type == 'doughnut' || this.type == 'pie'
                                ? colorDoughnut
                                : this.type == 'line'
                                    ? 'rgba(100,100,200,.2)'
                                    : '',
                    borderColor:
                        this.type == 'line'
                            ? borderColorLine
                            : this.type == 'doughnut' || this.type == 'pie'
                                ? 'rgba(0,0,0,0)'
                                : '',
                    pointBackgroundColor:
                        this.type == 'line' ? pointBackgroundColor : '',
                    fill: true,
                },
            ],
        };
    }

    public pie = () => {
        return {
            labels: this.labels,
            datasets: [
                {
                    label: this.label,
                    data: this.data,
                    backgroundColor:
                        this.type == 'bar'
                            ? colorBar
                            : this.type == 'doughnut' || this.type == 'pie'
                                ? colorDoughnut
                                : this.type == 'line'
                                    ? 'rgba(100,100,200,.2)'
                                    : '',
                    borderColor:
                        this.type == 'line'
                            ? borderColorLine
                            : this.type == 'doughnut' || this.type == 'pie'
                                ? 'rgba(0,0,0,0)'
                                : '',
                    hoverOffset: 4,
                },
            ],
        };
    }

    public doughnut = () => {
        return {
            labels: this.labels,
            datasets: [
                {
                    label: this.label,
                    data: this.data,
                    backgroundColor:
                        this.type == 'bar'
                            ? colorBar
                            : this.type == 'doughnut' || this.type == 'pie'
                                ? colorDoughnut
                                : this.type == 'line'
                                    ? 'rgba(100,100,200,.2)'
                                    : '',
                    borderColor:
                        this.type == 'line'
                            ? borderColorLine
                            : this.type == 'doughnut' || this.type == 'pie'
                                ? 'rgba(0,0,0,0)'
                                : '',
                    hoverOffset: 4,
                },
            ],
        };
    }

    public options = () => {
        return {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        display: this.showLabelsY,
                    },
                    grid: {
                        drawTicks:
                            this.type == 'doughnut' || this.type == 'pie' ? false : true,
                        drawOnChartArea:
                            this.type == 'doughnut' || this.type == 'pie' ? false : true,
                    },
                },
                x: {
                    ticks: {
                        display: this.showLabelsX,
                    },
                    grid: {
                        drawTicks:
                            this.type == 'doughnut' || this.type == 'pie' ? false : true,
                        drawOnChartArea: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
        };
    }
}

