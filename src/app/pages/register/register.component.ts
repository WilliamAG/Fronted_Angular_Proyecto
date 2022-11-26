import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User, USR } from 'src/app/shared/interfaces/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public RegisterForm !: FormGroup;
  constructor(private authService : AuthService, private fb : FormBuilder, private cookieService : CookieService, private router : Router) {
    this.RegisterForm = this.initForm();
  }

  ngOnInit(): void { }

  static passwordMatch(form: AbstractControl){
    return form.get('password')?.value === form.get('confirmPassword')?.value ? null : {passwordMatch : true};
  }

  public initForm():FormGroup{
    return this.fb.group({
      firstName : ['',Validators.required],
      secondName : ['',Validators.required],
      firstSurname : ['',Validators.required],
      secondSurname : ['',Validators.required],
      user : ['',[Validators.required]],
      email : ['',[Validators.required]],
      password : ['',[Validators.required]],
      confirmPassword : ['',[Validators.required]],
      acceptLicenseAgreement : [false,Validators.requiredTrue]
    }, {validators : RegisterComponent.passwordMatch})
  }

  public register():void{
    
    const {firstName, secondName, firstSurname, secondSurname, user, email, password, confirmPassword} = this.RegisterForm.value;

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    let usr : USR = {
      firstName: firstName,
      secondName: secondName,
      firstSurname: firstSurname,
      secondSurname: secondSurname,
      userName : user,
      email : email,
      password : password,
      joinDate : new Date()
    }
    // console.log(usr);
    this.authService.register(usr).subscribe({
      next: (res) => {
        console.log(res);
        this.cookieService.set('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.usr));
        this.router.navigate(['/gallery']);
      },
      error: (error) => {
        console.log(error);
        alert('Correo ya usado');
      }
    })
  }

}
