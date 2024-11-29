import { Component } from '@angular/core';
import { NombreService } from '../nombre.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  nombre: string =' ';

  constructor(private nombreService: NombreService){}

  actualizarNombre():void{
    this.nombreService.setNombre(this.nombre);
  }
}
