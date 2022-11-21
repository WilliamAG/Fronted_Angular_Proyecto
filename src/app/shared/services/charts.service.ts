import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataChart } from '../interfaces/charts.interface'
import { BehaviorSubject, Observable } from 'rxjs';

const chartData: dataChart = {
  data: [],
  labels: [],
  id: '0',
  y: true
}

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http: HttpClient) { }

  private class$ = new BehaviorSubject<dataChart>(chartData)

  get selectedData$(): Observable<dataChart> {
    return this.class$.asObservable()
  }

  setData(d: dataChart): void {
    this.class$.next(d)
  }


}
