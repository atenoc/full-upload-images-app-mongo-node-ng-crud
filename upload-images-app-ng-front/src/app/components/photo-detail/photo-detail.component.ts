import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Photo } from 'src/app/interfaces/Photo';
import { PhotoService } from 'src/app/services/photo.service';


@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {

  id: string;
  photo: Photo;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router) { }

  ngOnInit() {
    //console.log("carga")
    
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
      this.photoService.getPhoto(this.id)   //volver a llamar los datos con el id recibido
        .subscribe(
          res => {
            this.photo = res;
            console.log(res)
          },
          err => console.log(err)
        )
    });
  }

  deletePhoto(id: string) {
    this.photoService.deletePhoto(id)
      .subscribe(res => {
        console.log(res)
        this.router.navigate(['/photos']);
      })
  }

  updatePhoto(title: HTMLInputElement, description: HTMLInputElement): boolean {
    console.log("datos: "+this.photo._id, title.value, description.value)
    this.photoService.updatePhoto(this.photo._id, title.value, description.value)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/photos']);
      });
    return false;
  }

}
