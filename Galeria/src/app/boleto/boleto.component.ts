import { Component, OnInit } from '@angular/core';
import { NombreService } from '../nombre.service';

@Component({
  selector: 'app-boleto',
  templateUrl: './boleto.component.html',
  styleUrls: ['./boleto.component.css']
})
export class BoletoComponent implements OnInit {
  nombre: string = ''; 
  numeroSerie: number = 0; 

  constructor(private nombreService: NombreService) {}

  ngOnInit(): void {
    this.nombreService.nombre$.subscribe((nombre) => {
      this.nombre = nombre;
    });
    
    this.numeroSerie = Math.floor(100000 + Math.random() * 900000);
  }
}
