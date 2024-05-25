import { Component } from '@angular/core';

@Component({
  selector: 'app-recuperar-contrasenia',
  standalone: true,
  imports: [],
  templateUrl: './recuperar-contrasenia.component.html',
  styleUrl: './recuperar-contrasenia.component.css'
})
export class RecuperarContraseniaComponent {
  contrasenaNueva: string = '';
  confirmarContrasena: string = '';

  cambiarContrasena() {
    if (this.contrasenaNueva === this.confirmarContrasena) {
      // Lógica para cambiar la contraseña
      console.log('Contraseña cambiada');
    } else {
      console.error('Las contraseñas no coinciden');
    }
  }
}
