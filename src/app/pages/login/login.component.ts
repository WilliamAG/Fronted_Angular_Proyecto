import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { login } from 'src/constants/interfaces';
import { UsersService } from '../../../services/users.service';
import {Router} from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //dependency injection: to consume the service
  constructor(private authService: UsersService, private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  //instance of interface login
  login: login={
    email:"",
    password:""
  }
  
  //helps to control the DOM with *ngIf
  incorrect = false;
  notExists=false;
  error_msg='';

  //control form data and inputs  
  loginForm=new FormGroup({
    email: new FormControl('', [Validators.email,Validators.required] ),
    password: new FormControl('', [Validators.required])
  });

  get emailControl():FormControl{
    return this.loginForm.get('email') as FormControl
  }

  get passControl():FormControl{
    return this.loginForm.get('password') as FormControl
  }

  authUser(){
    this.authService.authenticate(this.login).subscribe( {
      next: (res) => {
        this.cookieService.delete('token');
        this.cookieService.set('token', res.token);
        this.router.navigate(['/gallery']);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        alert('Datos incorrectos');
      }
    });
  }

}

//used for take the info that the query returns
interface UserInfo{
  ok: boolean,
  msg: string,
  usr: {userId:any,
        firstName:any,
        secondName:any,
        firstSurname:any,
        secondSurname:any,
        userName:any,
        usedStorage:any,
        userTypeId:any,
        storagePlanId:any
      },
  token: any
}
