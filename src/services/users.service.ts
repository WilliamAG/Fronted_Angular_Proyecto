import { Injectable } from '@angular/core';
import {login} from '../constants/interfaces';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  //HttpClient Module injection that use for consuming RESTAPI service from the remote server
  constructor(private http:HttpClient) { }
  
  //post function for user authentication
  authenticate(auth:login): Observable<any>{
    return this.http.post(environment.apiUrl+'/login',auth);
  }
}  
