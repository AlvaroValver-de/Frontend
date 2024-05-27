import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from '../navbar/navbar.component';
import {  Empleado } from '../empleados/empleados.services.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar,MatSnackBarConfig  } from '@angular/material/snack-bar';



@Component({
  selector: 'app-registrarempleado',
  standalone: true,
  imports: [CommonModule,
    NavbarComponent,
    ReactiveFormsModule ,
    MatSnackBarModule,
  ],
  templateUrl: './registrarempleado.component.html',
  styleUrls: ['./registrarempleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {
  empleadoForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private _snackBar: MatSnackBar) {
    this.empleadoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      oficina: [null, Validators.required],
      cargo: ['', Validators.required],
      salario: [null, [Validators.required, Validators.min(0)]]
    });
  }

  //constructor(private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    if (this.empleadoForm.valid) {
      const empleado = this.empleadoForm.value;
      this.http.post('https://localhost:7100/laapi/guardarEmpleado', empleado).subscribe(
        response => {
          console.log('Empleado registrado exitosamente', response);
        },
        error => {
          console.error('Error al registrar el empleado', error);
        }
      );
      this.limpiarFormulario();
      this.mostrarSnackBar("Se registro al empleada/o: "+empleado.nombre+" "+empleado.apellido);
    }
  }

  limpiarFormulario() {
    this.empleadoForm.reset(); // Esto reinicia el formulario y borra todos los datos
  }

  mostrarSnackBar(mensaje: string) {
    const config = new MatSnackBarConfig();
    config.duration = 5000; // Duración en milisegundos
    config.verticalPosition = 'top'; // Posición vertical superior
    config.panelClass = ['snackbar-custom']; // Clase de estilo personalizado
    this._snackBar.open(mensaje, 'Cerrar', config);
}

}
