import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;
  constructor(private authService : AuthService, private fb : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.initForm();

    
  }


  public initForm():FormGroup{
    return this.fb.group({
      email : ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  public login():void{

    const {email, password} = this.loginForm.value;

    this.authService.login(email,password).subscribe(res => {
      console.log(res)
    })

  }

}
