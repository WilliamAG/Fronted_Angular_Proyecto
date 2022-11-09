import { Component, Input, OnInit } from '@angular/core';
import { ImagesService } from "../../shared/services/images.service";

@Component({
  selector: 'app-cards-image',
  templateUrl: './cards-image.component.html',
  styleUrls: ['./cards-image.component.scss']
})
export class CardsImageComponent implements OnInit {

  @Input() urlImage:string = ""
  @Input() name:string = ""
  @Input() idImage:number = 0

  constructor(private ImagesService:ImagesService) { }

  ngOnInit(): void {
  }

  showImage(){
    console.log(this.idImage+"show");
    this.ImagesService.setImage({id:this.idImage})
  }

  download(){
    console.log(this.idImage+" download");
  }

  deleteImage(){
    console.log(this.idImage+' delete');
  }

}
