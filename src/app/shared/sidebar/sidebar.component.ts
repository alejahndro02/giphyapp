import { GifServiceService } from './../../gifs/servies/gif-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent  {
get itemHistorial(){
  return this.gifService.historial
}
  constructor(private gifService:GifServiceService) {
    
   }
   research(){
     console.log('research', this.itemHistorial);

     
   }
}
