import { Component, Input } from '@angular/core';
import { ChartsService } from '../../shared/services/charts.service';
import { dataChart, Tchart } from '../../shared/interfaces/charts.interface';
import { ChartData, ChartOptions } from 'chart.js';
import { configChart } from "../../../constants/charts.config";

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css'],
})

export class GraphicComponent {
  labels: string[] = [];
  data: number[] = [];
  showLabelsY: boolean = true;
  configChart: configChart
  options: ChartOptions = {};

  constructor(private ChartsService: ChartsService) {
    this.configChart = new configChart(this.labels, this.data, this.label, this.type, this.showLabelsX, this.showLabelsY);

    this.ChartsService.selectedData$.subscribe((ch: dataChart) => {
      if (ch.id == this.idCanva) {
        this.data = ch.data;
        this.labels = ch.labels;
        this.showLabelsY = ch.y;
        this.configChart = new configChart(this.labels, this.data, this.label, this.type, this.showLabelsX, this.showLabelsY);
        this.loadData();
      }
    });
  }

  @Input() type: Tchart = 'line';
  @Input() label: string = '';
  @Input() width: string = '350px';
  @Input() showLabelsX: boolean = false;
  @Input() idCanva: string = '0';

  dataChartBar: ChartData<'bar'> = {
    labels: [],
    datasets: [],
  };

  dataChartLine: ChartData<'line'> = {
    labels: [],
    datasets: [],
  };

  dataChartPie: ChartData<'pie'> = {
    labels: [],
    datasets: [],
  };

  dataChartDoughnut: ChartData<'doughnut'> = {
    labels: [],
    datasets: [],
  };

  private bar() {
    this.dataChartBar = this.configChart.Bar();
  }

  private line() {
    this.dataChartLine = this.configChart.line();
  }

  private pie() {
    this.dataChartPie = this.configChart.pie();
  }

  private doughnut() {
    this.dataChartDoughnut = this.configChart.doughnut();
  }

  loadData() {
    if (this.type == 'bar') {
      this.bar()
    }else if(this.type == 'line'){
      this.line()
    }else if(this.type == 'pie'){
      this.pie()
    }else{
      this.doughnut()
    }

    this.options = this.configChart.options()
  }
}
