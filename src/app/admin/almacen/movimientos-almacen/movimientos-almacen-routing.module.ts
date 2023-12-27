import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovimientosAlmacenIndexComponent } from './movimientos-almacen-index/movimientos-almacen-index.component';
import { MovimientosAlmacenNuevoComponent } from './movimientos-almacen-nuevo/movimientos-almacen-nuevo.component';

const routes: Routes = [
  {
    path: '',
    component: MovimientosAlmacenIndexComponent,
  },
  {
    path: 'nuevo',
    component: MovimientosAlmacenNuevoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovimientosAlmacenRoutingModule {}
