import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Cambiar styleUrl a styleUrls
})
export class NavbarComponent {
  isNavbarHidden = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.pageYOffset;
    const threshold = 50; // Puedes ajustar este valor según sea necesario

    this.isNavbarHidden = yOffset > threshold;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const isNearTop = event.clientY < 50; // Puedes ajustar este valor según sea necesario
    if (isNearTop) {
      this.isNavbarHidden = false;
    }
  }
}