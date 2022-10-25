import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pagesObj } from './pages';
import { ROUTES } from 'src/constants';

const {
  HomeComponent,
  LoginComponent,
  RegisterComponent
} = pagesObj;

const routes: Routes = [
  {
    path: ROUTES.HOME,
    component: HomeComponent,
  },
  {
    path: ROUTES.LOGIN,
    component: LoginComponent,
  },
  {
    path: ROUTES.REGISTER,
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
