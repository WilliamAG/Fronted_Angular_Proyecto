import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/config/endpoints';
import { Image } from '../interfaces/image.interface';
import { Album } from '../interfaces/album.interface';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http : HttpClient) { }

  public getImages(userId : number , albumId : number):Observable<Image>{
    return this.http.get<Image>(`${ENDPOINTS.GALLERY}/?userId=${userId}&albumId=${albumId}`);
  }

  public getAlbums(userId : number):Observable<Album>{
    return this.http.get<Album>(`${ENDPOINTS.GALLERY}/album/?userId=${userId}`);
  }

//   public uploadImage(usuario : USR):Observable<User>{
//     return this.http.post<User>(ENDPOINTS.REGISTER,usuario);
//   }
}
