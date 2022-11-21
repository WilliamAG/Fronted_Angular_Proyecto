import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/config/endpoints';
import {Filter } from '../interfaces/binnacle.interface';

@Injectable({
  providedIn: 'root'
})

export class BinnacleService {

  
  constructor(private http : HttpClient) { }
  
  getBinnacles(filtro:Filter){ //recibe obejtp filtro
    return this.http.post(`${ENDPOINTS.BINNACLE}/`,filtro)
  }


}