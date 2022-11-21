import { Component, OnInit } from '@angular/core';
import { Album, dataAlbum} from 'src/app/shared/interfaces/album.interface';
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
  currentAlbum: Album;
  okNewAlbum: boolean = false;

  modeGallery = false;
  modeAlbum = true

  constructor(private galleryService: GalleryService, private ImagesService:ImagesService) {
    this.images = [];
    this.albums = [];
    this.currentAlbum = { albumId: undefined, name: undefined , createDate: new Date};
    this.getAlbumsUser();    
  }

  getAlbumsUser(){
    this.galleryService.getAlbums().subscribe({
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
    this.galleryService.getImages(album.albumId).subscribe({
      next: (images: any) => {
        for (let i = 0; i < images.length; i++) {
          images[i].url = this.galleryService.getValidUrl(images[i].url);
          this.images.push(images[i]);
        };
        this.ImagesService.setImages(this.images);
        this.ImagesService.setAlbum(album.name);
        this.modeGallery = true;
        this.modeAlbum = false;
        this.currentAlbum = album;
        console.log(this.currentAlbum)
    },
      error: (error: any) => {
        console.log(error);
        this.currentAlbum = album;
        this.modeGallery = true;
        this.modeAlbum = false;
      }
    });
}

  goAlbums() {
    this.modeGallery = false;
    this.modeAlbum = true;
  }

  fileUpload(e: any) {
    if (this.currentAlbum.albumId == undefined) {
      console.log("esta undefined")
      return;
    };
    e.preventDefault();
    const file = e.target.files[0];
    this.galleryService.uploadFile(file, this.currentAlbum.albumId).subscribe({
      next: (res: any) => {
        let image = res.data;
        image.url = this.galleryService.getValidUrl(image.url);
        this.images.push(image)
        this.ImagesService.setImages(this.images);
        this.ImagesService.setAlbum(this.currentAlbum.name);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  public openImage(id:number){
    this.ImagesService.setValueSelect(id);
  }

  removeImage(image: Image) {
    if (image.imageId == undefined) {
      return;
    }
    this.galleryService.deleteImage(image.imageId).subscribe((image: any) => {
      console.log(image);
    });
    this.images = this.images.filter((img) => img.imageId != image.imageId);    
    this.ImagesService.setImages(this.images);
  }

  logout() {
    this.galleryService.logout()
  }

  deleteImage(image: Image) {
    if (image.imageId == undefined) {
      return;
    }
    this.galleryService.deleteImage(image.imageId).subscribe({
      next: (res: any) => {
        this.images = this.images.filter((img: Image) => img.imageId != image.imageId);
        this.ImagesService.setImages(this.images);
        this.ImagesService.setAlbum(this.currentAlbum.name);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  selectNewAlbum(){
    if (this.okNewAlbum){
      this.okNewAlbum = false
    }else{
      this.okNewAlbum = true
    }
  }

  nameAlbum = {
    name:""
  }

  addAlbum(){
    if (this.nameAlbum.name.trim() == "") {
      alert("No coloco el nombre del álbum")
      return;
    }

    this.galleryService.newAlbum(this.nameAlbum).subscribe(
      {
        next: (res:dataAlbum) =>{
          this.selectNewAlbum()
          this.getAlbumsUser()
          console.log(res.msg)
        },
        error: (error) => alert(error.msg)
      }
    )
  }


}
