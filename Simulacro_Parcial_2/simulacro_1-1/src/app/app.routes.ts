import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductoFormulario } from './pages/producto-formulario/producto-formulario';
import { ProductoDetalle } from './pages/producto-detalle/producto-detalle';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'formulario', component: ProductoFormulario},
    {path: 'formulario/:id', component: ProductoFormulario},
    {path: ':id', component: ProductoDetalle}   
];
