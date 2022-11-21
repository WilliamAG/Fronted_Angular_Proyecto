import { NgModule } from '@angular/core';
import { RouterModule, ROUTER_CONFIGURATION, Routes } from '@angular/router';
import { ROUTES } from 'src/constants';
import { AuthGuard } from './auth.guard';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LogComponent } from './pages/log/log.component';

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
  {path: ROUTES.ADMIN.BINNACLE,
    component: LogComponent  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
