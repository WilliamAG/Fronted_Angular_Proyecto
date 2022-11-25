import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/config/endpoints'; 
import { User, USR } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  public login(email : string , password : string):Observable<User>{
    const body = {email , password};
    return this.http.post<User>(ENDPOINTS.LOGIN,body);
  }

  public register(usuario : USR):Observable<User>{
    return this.http.post<User>(ENDPOINTS.REGISTER,usuario);
  }
}

