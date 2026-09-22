import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bienvenida.html',
  styleUrls: ['./bienvenida.css']
})
export class Bienvenida {
  nombre = '';
  mensaje = '';

  onSubmit() {
    const nombreIngresado = this.nombre.trim();

    if (!nombreIngresado) {
      this.mensaje = 'Por favor escribe tu nombre antes de entrar.';
      return;
    }

    this.mensaje = `Hola ${nombreIngresado}, bienvenido a la aplicación de Sebastian.`;
  }
}
