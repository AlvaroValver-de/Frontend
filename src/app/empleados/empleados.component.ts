import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from '../navbar/navbar.component';
import { EmpleadosService, Empleado } from './empleados.services.component';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent implements OnInit {
  empleados: Empleado[] = [];

  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.empleadosService.getEmpleados().subscribe(data => {
      this.empleados = data;
    });
  }

}
