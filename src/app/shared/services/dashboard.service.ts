import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/config/endpoints';
import { Image } from '../interfaces/image.interface';

@Injectable({
  providedIn: 'root'
})

export class GalleryService {

  constructor(private http : HttpClient) { }

  public getImages(userId : number , albumId : number):Observable<Image>{
    return this.http.get<Image>(`${ENDPOINTS.GALLERY}/?userId=${userId}&albumId=${albumId}`);
  }
  
}
