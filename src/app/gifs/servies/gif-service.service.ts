import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifServiceService {
private _historial: string[] = [];
  get historial(){
    return [...this._historial]
  }
  buscarGifs(busqueda:string =''){
    let historial = this._historial
    busqueda = busqueda.trim().toLocaleLowerCase()
    //Se puede evaluar desde el servicio si esta vacio el input para asi no colocar algo espacios en el arreglo, en este caso lo dejaremos en el metodo buscar gif
    // if(historial.trim().length === 0){
    //   return;
    // }
    //Se evalua si el arreglo del historial no incluye la palabra buscada
    if(!historial.includes(busqueda)){
      historial.unshift(busqueda);
      //se limita el numero en el arreglo 
      historial= historial.slice(0,10);
    }
    console.log(historial);
  }
}
