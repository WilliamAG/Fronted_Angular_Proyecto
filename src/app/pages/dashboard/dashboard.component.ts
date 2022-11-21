import { Component } from '@angular/core';
import { DashboardService } from "../../shared/services/dashboard.service";
import { ChartsService } from "../../shared/services/charts.service";
import { dataStatic, dataDate, getDataChart } from "../../shared/interfaces/dashboard.interface";
import { dataChart } from "../../shared/interfaces/charts.interface";
import { Tchart } from "../../shared/interfaces/charts.interface";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  images: string = "0";
  user: string = "0";
  storage: string = "0";
  selectedTypeChartUser: Tchart = 'bar';
  topUser = { label: '', value: 0 };
  downUser = { label: '', value: 0 };
  selectedTypeChartImage: Tchart = 'line';
  topImage = { label: '', value: 0 };
  downImage = { label: '', value: 0 };
  selectedTypeChartPlan: Tchart = 'bar';
  topPlan = { label: '', value: 0 };
  downPlan = { label: '', value: 0 };

  selectRegister: dataDate = {
    firstDate: this.sumarDias(new Date(Date.now()), -5000)
      .toISOString()
      .substring(0, 10),
    lastDate: new Date(Date.now()).toISOString().substring(0, 10),
  };

  selectImage: dataDate = {
    firstDate: this.sumarDias(new Date(Date.now()), -5000)
      .toISOString()
      .substring(0, 10),
    lastDate: new Date(Date.now()).toISOString().substring(0, 10),
  };

  constructor(private DashboardService: DashboardService, private ChartsService: ChartsService) {
    this.totalImage();
    this.totalUsers();
    this.totalStorage();
    this.changeDateRegister();
    this.changeDateImage();
    this.changeUsePlan();
  }

  changeDateRegister() {
    this.DashboardService.getDateRegister(this.selectRegister).subscribe({
      next: (res: getDataChart) => {
        this.topUser = res.up;
        this.downUser = res.down;
        this.ChartsService.setData(
          {
            data: res.data,
            labels: res.labels,
            id: '1',
            y: this.selectedTypeChartUser == 'bar' ||
              this.selectedTypeChartUser == 'line'
              ? true
              : false,
          }
        );
      },
      error: (error) => console.log(error)
    })
  }
  
  changeUsePlan() {
    this.DashboardService.getUsePlan().subscribe({
      next: (res: getDataChart) => {
        this.topPlan = res.up;
        this.downPlan = res.down;
        this.ChartsService.setData(
          {
            data: res.data,
            labels: res.labels,
            id: '3',
            y: this.selectedTypeChartPlan == 'bar' ||
              this.selectedTypeChartPlan == 'line'
              ? true
              : false,
          }
        );
      },
      error: (error) => console.log(error)
    })
  }

  changeDateImage() {
    this.DashboardService.getDateImage(this.selectImage).subscribe({
      next: (res: getDataChart) => {
        this.topImage = res.up;
        this.downImage = res.down;
        this.ChartsService.setData(
          {
            data: res.data,
            labels: res.labels,
            id: '2',
            y: this.selectedTypeChartImage == 'bar' ||
              this.selectedTypeChartImage == 'line'
              ? true
              : false,
          }
        );
      },
      error: (error) => console.log(error)
    })
  }

  private sumarDias(fecha: Date, dias: number) {
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  private totalImage() {
    this.DashboardService.getTotalImages().subscribe({
      next: (res: dataStatic) => {
        this.images = res.msg
      },
      error: (error: any) => {
        console.log(error);
      }
    }
    )
  }

  private totalUsers() {
    this.DashboardService.getTotalUsers().subscribe({
      next: (res: dataStatic) => {
        this.user = res.msg
      },
      error: (error: any) => {
        console.log(error);
      }
    }
    )
  }

  private totalStorage() {
    this.DashboardService.getUseStorage().subscribe({
      next: (res: dataStatic) => {
        this.storage = res.msg
      },
      error: (error: any) => {
        console.log(error);
      }
    }
    )
  }

  changeChart(id: string, typeC: Tchart) {
    if (id == "1") {
      this.selectedTypeChartUser = typeC;
      this.changeDateRegister();
    } else if (id == "2") {
      this.selectedTypeChartImage = typeC;
      this.changeDateImage();
    } else if ( id == "3" ) {
      this.selectedTypeChartPlan = typeC;
      this.changeUsePlan();
    }
  }

  showClassCharts(chart: Tchart, select: Tchart) {
    return {
      'content-charts-1-selects-select': select == chart ? true : false,
      'content-charts-1-selects-item': select == chart ? false : true
    }
  }
}
