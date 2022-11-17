import { Component, OnInit } from '@angular/core';
import { ImagesService } from "../../shared/services/images.service";
import { Image } from "../../shared/interfaces/image.interface";
import { showModal, sliceImageModal, showDataImage } from "../../animations/modal.animations";
import { GalleryService } from 'src/app/shared/services/gallery.service';

@Component({
  selector: 'app-view-image-modal',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.scss'],
  animations: [
    showModal,
    sliceImageModal,
    showDataImage,
  ]
})
export class ViewImageComponent {

  public show: boolean = false
  public showData: boolean = true
  public stateImage: 'static' | 'sliceRight' | 'sliceLeft' = 'static'
  public images: Image[] = []
  public selected: number = -1
  public album: string | undefined = ""

  constructor(private ImagesService: ImagesService, private galleryService: GalleryService) {
    this.ImagesService.Images$.subscribe((d: Image[]) => {
      if (d.length != 0) {
        this.images = d
      }
    })

    this.ImagesService.selectedImage$.subscribe((d: number) => {
      if (d != -1) {
        this.selected = d
        this.showModal()
        console.log(this.selected + " esta se selecciono")
      }
    })

    this.ImagesService.album$.subscribe((album: string | undefined) => {
      this.album = album
    })
  }

  showModal() {
    this.show = true
  }

  hideModal() {
    this.show = false
  }

  nextImage() {
    this.stateImage = 'sliceLeft'
    this.showData = false

    setTimeout(() => {
      this.stateImage = 'sliceRight'
      if (this.images.length == this.selected + 1) {
        this.selected = 0
      } else {
        this.selected++
      }
    }, 300)

    setTimeout(() => {
      this.stateImage = 'static'
      this.showData = true
    }, 300)
  }

  lastImage() {
    this.stateImage = 'sliceRight'
    this.showData = false

    setTimeout(() => {
      this.stateImage = 'sliceLeft'
      if (this.selected == 0) {
        this.selected = this.images.length - 1
      } else {
        this.selected--
      }
    }, 300)

    setTimeout(() => {
      this.stateImage = 'static'
      this.showData = true
    }, 300)
  }

  deleteImage() {
    const imageId = this.images[this.selected].imageId || -1
    this.galleryService.removeImage(imageId).subscribe((d: any) => {
      console.log(d)
    })
    this.images.splice(this.selected, 1)
    

    this.hideModal()
  }
}
