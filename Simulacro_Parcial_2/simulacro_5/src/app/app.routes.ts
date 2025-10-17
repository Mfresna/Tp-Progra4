import { Routes } from '@angular/router';
import { Formulario } from './pages/formulario/formulario';
import { Detalle } from './pages/detalle/detalle';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'formulario', component: Formulario },
    { path: 'formulario/:id', component: Formulario },
    { path: ':id', component: Detalle }
];
