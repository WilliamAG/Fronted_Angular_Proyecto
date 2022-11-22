import { NgModule, PLATFORM_INITIALIZER } from '@angular/core';
import { RouterModule, ROUTER_CONFIGURATION, Routes } from '@angular/router';
import { ROUTES } from 'src/constants';
import { AuthGuard } from './auth.guard';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LogComponent } from './pages/log/log.component';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { InterfazPlanComponent } from './pages/interfaz-plan/interfaz-plan.component';
import { PagoComponent } from './pages/pago/pago.component';

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
  {
    path: ROUTES.REGISTER,
    component: RegisterComponent,
  },
  {
    path: ROUTES.GALLERY,
    component: GalleryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ROUTES.ADMIN.BINNACLE,
    component: LogComponent
  },
  {
    path: ROUTES.ADMIN.DASHBOARD,
    component: DashboardComponent
  },
  { path: 'plan', component: InterfazPlanComponent},
  { path: 'hacer-pago', component:PagoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
