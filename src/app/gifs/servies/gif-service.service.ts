import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Gif, SearchGifsResponse } from '../interface/gifsSearch.interface';
@Injectable({
  providedIn: 'root'
})

export class GifServiceService {
  URL:string = environment.URL
  api_key: string = environment.api_key
  limit:number = environment.limit
  private _historial: string[] = [];
  public resultados:Gif[] =[];

  get historial(){
    return [...this._historial]
  }

  constructor(private http:HttpClient){
    //Se extrae la informacion de el localStorage
    let storage= localStorage.getItem('Historial');
    let ultimateResults = localStorage.getItem('UltimoResultado')
    // if(storage){
    //   this._historial = JSON.parse(storage)
    // }
    //otra forma de hacerlo 
    this._historial= JSON.parse(storage!) || [];
    this.resultados = JSON.parse(ultimateResults!) || []; 
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
      //Se almacena la informacion dentro del localStorage
      localStorage.setItem('Historial', JSON.stringify(historial));
    }

    this.http.get<SearchGifsResponse>(`${this.URL}api_key=${this.api_key}&q=${busqueda}&limit=${this.limit}`)
    .subscribe((response)=>{
      this.resultados = response.data
      localStorage.setItem('UltimoResultado', JSON.stringify(this.resultados))
      })
    }
}