// src/app/empleados.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';



export interface Oficina {
  ide: number;
  provincia: string;
  ciudad: string;
  direccion: string;
  telefono: string;
}

@Injectable({
  providedIn: 'root'
})
export class OficinaService {

  private apiUrl = 'https://localhost:7100/laapi/listaoficinas'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getOficinas(): Observable<Oficina[]> {
    return this.http.get<Oficina[]>(this.apiUrl).pipe(
      tap(data => console.log('API Response:', data)) // Agregar para depuración
    );
  }
}
