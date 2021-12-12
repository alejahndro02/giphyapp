import { Component } from '@angular/core';
import { GifServiceService } from '../servies/gif-service.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
})
export class ResultadoComponent {

  get resultados(){
    return this.gifService.resultados
  }

  constructor(private gifService: GifServiceService) { }



}
