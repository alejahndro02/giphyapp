import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { GifLayoutComponent } from './gif-layout/gif-layout.component';
import { ResultadoComponent } from './resultado/resultado.component';

@NgModule({
  declarations: [
    BusquedaComponent,
    GifLayoutComponent,
    ResultadoComponent
  ],
  exports:[
    GifLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
