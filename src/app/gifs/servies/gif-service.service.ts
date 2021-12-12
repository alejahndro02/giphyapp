import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GifServiceService {
  URL:string = environment.URL
  api_key: string = environment.api_key
  limit:number = environment.limit
private _historial: string[] = [];
public resultados:any[] =[];
  get historial(){
    return [...this._historial]
  }
  constructor(private http:HttpClient){}
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
    this.http.get(`${this.URL}api_key=${this.api_key}&q=${busqueda}&limit=${this.limit}`)
    .subscribe((response:any)=>{
      this.resultados = response.data
      })
    }

}