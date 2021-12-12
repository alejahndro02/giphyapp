import { GifServiceService } from './../servies/gif-service.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent  {

  @ViewChild('txtBuscar') txtBuscar! : ElementRef<HTMLInputElement>

  constructor(private gifService:GifServiceService){}

  buscar(){
    const valor = this.txtBuscar.nativeElement.value
    if(valor.trim().length === 0){
      return;
    }
    this.gifService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
 }
}
