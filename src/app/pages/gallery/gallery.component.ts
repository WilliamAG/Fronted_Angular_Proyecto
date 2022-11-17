import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Album } from 'src/app/shared/interfaces/album.interface';
import { Image } from 'src/app/shared/interfaces/image.interface';
import { GalleryService } from 'src/app/shared/services/gallery.service';
import { ImagesService } from 'src/app/shared/services/images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: Image[];
  albums: Album[];

  modeGallery = false;
  modeAlbum = true

  constructor(private galleryService: GalleryService, private ImagesService:ImagesService) {
    this.images = [];
    this.albums = [];

    galleryService.getAlbums().subscribe({
      next: (albums: any) => {
        for (let i = 0; i < albums.length; i++) {
          this.albums.push(albums[i]);
        }
      },
      error: (error: any) => {
        console.log("No hay albumes");
      }
    });
  }
  
  ngOnInit(): void { }
  
  goGallery(album: Album) {
    if (album.albumId == undefined) {
      return;
    }
    this.images = [];
    this.galleryService.getImages(album.albumId).subscribe((images: any) => {
      for (let i = 0; i < images.length; i++) {
        this.images.push(images[i]);
      };
      this.ImagesService.setImages(this.images);
      this.ImagesService.setAlbum(album.name);
    });
    this.modeGallery = true;
    this.modeAlbum = false;
  }

  goAlbums() {
    this.modeGallery = false;
    this.modeAlbum = true;
  }

  fileUpload(event: Event) {
    console.log(event);
    alert("Subir imagen");
  }

  public openImage(id:number){
    this.ImagesService.setValueSelect(id);
  }

  removeImage(image: Image) {
    if (image.imageId == undefined) {
      return;
    }
    this.galleryService.removeImage(image.imageId).subscribe((image: any) => {
      console.log(image);
    });
    this.images = this.images.filter((img) => img.imageId != image.imageId);    
    this.ImagesService.setImages(this.images);
  }

  logout() {
    this.galleryService.logout()
  }
}
