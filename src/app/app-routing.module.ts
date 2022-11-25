import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'src/constants';
import { AuthGuard } from './auth.guard';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';

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
    path: ROUTES.ADMIN.DASHBOARD,
    component: DashboardComponent
  },
  {
    path: ROUTES.ADMIN.MAINTENANCE,
    component: MaintenanceComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
