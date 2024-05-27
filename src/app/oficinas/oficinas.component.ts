import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from '../navbar/navbar.component';
import { OficinaService, Oficina } from './oficinas.service.component';

@Component({
  selector: 'app-oficinas',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './oficinas.component.html',
  styleUrl: './oficinas.component.css'
})
export class OficinasComponent {
  Oficinas: Oficina[] = [];

  constructor(private OficinaService: OficinaService) { }

  ngOnInit(): void {
    this.OficinaService.getOficinas().subscribe(data => {
      this.Oficinas = data;
    });
  }

}
