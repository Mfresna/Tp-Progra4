import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductoNuevo } from './pages/producto-nuevo/producto-nuevo';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'producto-form', component: ProductoNuevo}    
];
