import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { BoletoComponent } from './boleto/boleto.component';
import { GaleriaComponent } from './galeria/galeria.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, 
  { path: 'inicio', component: InicioComponent },
  { path: 'boleto', component: BoletoComponent },
  { path: 'galeria', component: GaleriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

