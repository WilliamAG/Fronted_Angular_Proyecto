import { Component, OnInit } from '@angular/core';
import { ImagesService } from "../../shared/services/images.service";
import { imageIdentifier } from "../../shared/interfaces/view.interface";
import { showModal, sliceImageModal, showDataImage } from "../../animations/modal.animations";

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

  constructor(private ImagesService: ImagesService) {
    this.ImagesService.selectedImage$.subscribe((d: imageIdentifier) => {
      if (d.id >= 0) {
        this.showModal()
      }
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
    setTimeout(() => { this.stateImage = 'sliceRight' }, 600)
    setTimeout(() => { 
      this.stateImage = 'static'
      this.showData = true 
    }, 600)
  }

  lastImage() {
    this.stateImage = 'sliceRight'
    this.showData = false
    setTimeout(() => {this.stateImage = 'sliceLeft'}, 600)
    setTimeout(() => {
      this.stateImage = 'static'
      this.showData = true 
    }, 600)
  }

}
