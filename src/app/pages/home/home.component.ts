import { Component, OnInit } from '@angular/core';
import { ChartsService } from "../../shared/services/charts.service"
import {dataChart} from "../../shared/interfaces/charts.interface"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ChartsService:ChartsService) { }

  chart:dataChart={
    data:[12,32,23,25,31,30,43],
    labels:["ksjm", "jsn", "jan", "jsj", "hwgw", "jwshw", "jhw"],
    id:"0",
    y: true
  }

  ngOnInit(): void {
    this.ChartsService.setData(this.chart)
  }

}
