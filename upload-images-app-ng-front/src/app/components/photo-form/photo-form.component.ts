import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PhotoService } from 'src/app/services/photo.service';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  file:File
  photoSelected: string | ArrayBuffer

  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit() {
  }

  fotoSeleccionada(event:HtmlInputEvent): void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];

      //vista previa
      const reader = new FileReader()
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  subirFoto(titulo: HTMLInputElement, descripcion: HTMLTextAreaElement){
    
    this.photoService.createPhoto(titulo.value, descripcion.value, this.file)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/photos'])
      }, 
        err => {
          console.log(err)
      });

    return false;
  }

}
