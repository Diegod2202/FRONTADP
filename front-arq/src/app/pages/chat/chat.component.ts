import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  descripcion: string = '';
  textoDevuelto: string = '';
  imagenDevuelta: string = '';
  hasResults: boolean = false;

  constructor(private http: HttpClient) {}

  loading: boolean = false;

sendDescription() {
  this.loading = true;

  const body = { descripcion: this.descripcion };
  
  // this.http.post('http:', body).subscribe((response: any) => {
  //   this.textoDevuelto = response.texto;
  //   this.imagenDevuelta = response.imagen;
  //   this.loading = false; 
      this.hasResults = true; 

  // });
}


  repeatProcess() {
    this.descripcion = '';
    this.textoDevuelto = '';
    this.imagenDevuelta = '';
    this.hasResults = false;

  }
}
