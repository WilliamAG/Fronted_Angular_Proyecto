import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewImageComponent } from './components/view-image/view-image.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TokenInterceptor } from './token.interceptor';
import { FormsModule } from '@angular/forms';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ViewImageComponent,
    NavbarComponent,
    FooterComponent,
    GalleryComponent,
    GraphicComponent,
    DashboardComponent,
    TableComponent,
    MaintenanceComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgChartsModule,
    FormsModule
  ],
  
  providers: [
    CookieService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
