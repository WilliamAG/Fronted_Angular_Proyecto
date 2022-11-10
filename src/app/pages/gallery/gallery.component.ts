import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/shared/interfaces/image.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: Image[];

  constructor() { 
    this.images = [];
    // Traer desde el servidor
    let imagesFromServer = [
      {url: "https://explore.zoom.us/docs/image/MTM.png", filename: 'Image 1'},
      {url: "https://explore.zoom.us/docs/image/MTM.png", filename: 'Image 2'},
      {url: "https://explore.zoom.us/docs/image/MTM.png", filename: 'Image 3'}, 
      {url: "https://explore.zoom.us/docs/image/MTM.png", filename: 'Image 4'},
      {url: "https://explore.zoom.us/docs/image/MTM.png", filename: 'Image 5'},
      {url: "https://explore.zoom.us/docs/image/MTM.png", filename: 'Image 6'},
      {url: "https://explore.zoom.us/docs/image/MTM.png", filename: 'Image 7'},
      {url: "https://explore.zoom.us/docs/image/MTM.png", filename: 'Image 8'},
      {url: "https://explore.zoom.us/docs/image/MTM.png", filename: 'Image 9'},
      {url: "https://explore.zoom.us/docs/image/MTM.png", filename: 'Image 10'},
    ];

    imagesFromServer.forEach( (image) => {
      console.log(image.filename);
      this.images.push(image);
    });
  }

  ngOnInit(): void {
  }

  fileUpload(event: Event) {
    console.log(event);
    this.images.push({url: "https://explore.zoom.us/docs/image/MTM.png", filename: 'Image add'});
  }

  downloadImage(image: Image) {
    console.log(image);
  }
}
