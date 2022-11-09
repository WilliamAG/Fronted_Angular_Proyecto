import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ENDPOINTS } from 'src/app/config/endpoints';
import { imageIdentifier } from '../interfaces/view.interface';

const identifier:imageIdentifier={
  id:-1
}

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http : HttpClient) { }

  private class$ = new BehaviorSubject<imageIdentifier>(identifier)

  get selectedImage$(): Observable<imageIdentifier>{
    return this.class$.asObservable()
  }

  setImage(d:imageIdentifier):void{
    this.class$.next(d)
  }

}
