import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/shared/interfaces/album.interface';
import { Image } from 'src/app/shared/interfaces/image.interface';
import { GalleryService } from 'src/app/shared/services/gallery.service';

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

  userId: number = 0;

  constructor(private galleryService: GalleryService) {
    this.images = [];
    this.albums = [];
    galleryService.getAlbums(this.userId).subscribe((albums: any) => {
      for (let i = 0; i < albums.length; i++) {
        this.albums.push(albums[i]);
      }
    });
  }
  
  ngOnInit(): void {
  }
  
  goGallery(album: Album) {
    if (album.albumId == undefined) {
      return;
    }
    this.images = [];
    this.galleryService.getImages(this.userId, album.albumId).subscribe((images: any) => {
      for (let i = 0; i < images.length; i++) {
        this.images.push(images[i]);
      };
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
    this.images.push({
      url: "https://explore.zoom.us/docs/image/MTM.png", fileName: 'Image add'
    });
  }
}
