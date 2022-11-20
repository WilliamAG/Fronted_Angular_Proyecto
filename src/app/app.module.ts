import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewImageComponent } from './components/view-image/view-image.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

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
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
