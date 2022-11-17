import { Component, OnInit } from '@angular/core';
import { ChartsService } from "../../shared/services/charts.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ChartsService:ChartsService) { }

  ngOnInit(): void {  }

}
