import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Image } from '../interfaces/image.interface';

const datasetImages: Image[] = []
const select: number = -1
const album: string|undefined = ""

@Injectable({
  providedIn: 'root'
})

export class ImagesService {

  constructor(private http: HttpClient) { }

  private dataset$ = new BehaviorSubject<Image[]>(datasetImages)
  private selected$ = new BehaviorSubject<number>(select)
  private albumSelect$ = new BehaviorSubject<string|undefined>(album)

  get Images$(): Observable<Image[]> {
    return this.dataset$.asObservable()
  }

  setImages(d: Image[]): void {
    this.dataset$.next(d)
  }

  get selectedImage$(): Observable<number> {
    return this.selected$.asObservable()
  }

  setValueSelect(d: number): void {
    this.selected$.next(d)
  }

  get album$(): Observable<string|undefined> {
    return this.albumSelect$.asObservable()
  }

  setAlbum(d: string|undefined): void {
    this.albumSelect$.next(d)
  }

}
