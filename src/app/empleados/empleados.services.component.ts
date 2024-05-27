// src/app/empleados.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';



export interface Empleado {
  empleadoID: number;
  nombre: string;
  apellido: string;
  oficinaID: number;
  oficinaDireccion: string;
  cargo: string;
  salario: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private apiUrl = 'https://localhost:7100/laapi/listaempleados'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl);
}
}
