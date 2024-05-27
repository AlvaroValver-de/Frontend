import { Routes } from '@angular/router';
import {EmpleadosComponent} from './empleados/empleados.component'
import {OficinasComponent} from './oficinas/oficinas.component'
import {RegistrarEmpleadoComponent} from './registrarempleado/registrarempleado.component'


export const routes: Routes = [
    { path: '', component: EmpleadosComponent },
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'oficinas', component: OficinasComponent },
    { path: 'form', component: RegistrarEmpleadoComponent },
];
