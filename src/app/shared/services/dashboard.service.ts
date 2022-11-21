import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/config/endpoints';
import { dataStatic, getDataChart, dataDate } from '../interfaces/dashboard.interface';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(private http : HttpClient) { }

  public getTotalImages():Observable<dataStatic>{
    return this.http.get<dataStatic>(`${ENDPOINTS.DASHBOARD.IMAGES}`);
  }

  public getTotalUsers():Observable<dataStatic>{
    return this.http.get<dataStatic>(`${ENDPOINTS.DASHBOARD.USERS}`);
  }

  public getUseStorage():Observable<dataStatic>{
    return this.http.get<dataStatic>(`${ENDPOINTS.DASHBOARD.STORAGE}`);
  }

  public getDateRegister(data:dataDate):Observable<getDataChart>{
    return this.http.post<getDataChart>(`${ENDPOINTS.DASHBOARD.DATE_REGISTER}`,data);
  }

  public getDateImage(data:dataDate):Observable<getDataChart>{
    return this.http.post<getDataChart>(`${ENDPOINTS.DASHBOARD.DATE_IMAGE}`,data);
  }

}
