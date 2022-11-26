import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from 'src/app/config/endpoints';
var moment = require('moment');

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  
  constructor(private http : HttpClient) {
    
  }

  public getTable(table: string) {
    return this.http.get(`${ENDPOINTS.MAINTENANCE}/${table}`);
  }

  public insertTable(table: string, data: any) {
    let cleanData = this.cleanData(data);
    return this.http.post(`${ENDPOINTS.MAINTENANCE}/${table}`, cleanData);
  }

  public updateTable(table: string, id: number, data: any) {
    let cleanData = this.cleanData(data);
    return this.http.put(`${ENDPOINTS.MAINTENANCE}/${table}/id/${id}`, cleanData);
  }

  public deleteTable(table: string, id: number) {
    return this.http.delete(`${ENDPOINTS.MAINTENANCE}/${table}/id/${id}`);
  }

  public cleanData(data: any) {
    let cleanData = {};
    for (const key in data) {
      if (moment(data[key], moment.ISO_8601, true).isValid()) {
        cleanData[key] = moment(data[key]).format('YYYY-MM-DD');
        console.log(cleanData[key]);
      } else if (data[key] !== '') {
        cleanData[key] = data[key];
      }

    }
    return cleanData;
  }

}
