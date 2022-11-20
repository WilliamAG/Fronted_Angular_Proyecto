import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/config/endpoints';
import { Image } from '../interfaces/image.interface';
import { Album } from '../interfaces/album.interface';
import jwt_decode from "jwt-decode";
import { CookieService } from 'ngx-cookie-service';
import { UserToken } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GalleryService {

  
  constructor(private http : HttpClient, private cookieService: CookieService, private router: Router) { }
  
  public getImages(albumId : number):Observable<Image>{
    const userId = this.getUserId();
    return this.http.get<Image>(`${ENDPOINTS.GALLERY}/?userId=${userId}&albumId=${albumId}`);
  }

  public getAlbums():Observable<Album>{
    const userId = this.getUserId();
    return this.http.get<Album>(`${ENDPOINTS.GALLERY}/album/?userId=${userId}`);
  }
  
  private getUserId(): number {
    const token = this.cookieService.get('token');
    const decoded: UserToken = jwt_decode(token);
    const userId = decoded.idusuario;
    return userId;
  }

  public logout(): void {
    this.cookieService.delete('token');
    this.router.navigate(['/login']);
  }

  uploadFile(file: File, albumId: number): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('albumId', albumId.toString());
    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
    return this.http.post(`${ENDPOINTS.UPLOADS}`, formData, { headers: headers });
  }

  public getValidUrl(s: String): String {
    var result = s.match(/http(s)?:\/\//g);
    if (result === null) {
      return `${ENDPOINTS.IMAGE}/${s}`;
    } else {
      return s;
    }
  };

  deleteImage(imageId: number): Observable<any> {
    return this.http.delete(`${ENDPOINTS.GALLERY}/${imageId}`);
  }
}
