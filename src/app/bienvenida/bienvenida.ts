import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bienvenida.html',
  styleUrls: ['./bienvenida.css']
})
export class Bienvenida {
  nombre = '';
  mensaje = '';

  onSubmit() {
    this.mensaje = `Hola ${this.nombre}, bienvenido a la aplicación de Sebastian.`;
  }
}
