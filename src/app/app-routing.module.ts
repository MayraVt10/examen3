import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactosComponent } from './contactos/contactos.component';
import { PedidoComponent } from './pedido/pedido.component';
import { InventarioComponent } from './inventario/inventario.component';
import { Inventario2Component } from './inventario2/inventario2.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // otras rutas
  { path: 'contactos', component: ContactosComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'inventario2', component: Inventario2Component },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
