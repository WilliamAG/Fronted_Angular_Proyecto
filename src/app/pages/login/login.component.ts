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
    this.authService.authenticate(this.login).subscribe( res =>{
      var status:UserInfo = <any>res
     
      if (status.msg='El usuario no existe'){
          this.notExists=true;
          this.error_msg=status.msg;
      }else if(status.ok=true){ //user exists
          if(status.usr.userTypeId==1){
              console.log('Es usuario administrador')
          }else if(status.usr.userTypeId==2){
              console.log('Es usuario registrado')
              //this.router.navigateByUrl('/') redirect to user profile
          }else if(status.usr.userTypeId==3){
              console.log('Es invitado')
          }else {
              console.log('Tipo de usuario no válido')
          }
      }else{
          this.error_msg="Ha ocurrido un error"
      }
    }, error=>{
        if(error.error.msg='Correo o contraseña incorrectos'){
            this.incorrect=true
            this.error_msg=error.error.msg
        }else{
          this.error_msg='Ha ocurrido un error'
        }
    })
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
