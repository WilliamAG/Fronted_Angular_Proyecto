import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, USR } from 'src/app/shared/interfaces/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public RegisterForm !: FormGroup;
  constructor(private authService : AuthService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.RegisterForm = this.initForm();
  }

  public initForm():FormGroup{
    return this.fb.group({
      user : ['',[Validators.required]],
      email : ['',[Validators.required]],
      password : ['',[Validators.required]],
      confirm : ['',[Validators.required]]
    })
  }

  public register():void{
    
    const {user,email,password,confirm} = this.RegisterForm.value;

    let usr : USR = {
      firstName: " ",
      secondName: " ",
      firstSurname: " ",
      secondSurname: " ",
      userName : user,
      email : email,
      password : password,
      joinDate : new Date()
    }

    this.authService.register(usr).subscribe(res => {
      console.log(res);
    })
  }

}
