import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  usuario = {
    nombre: '',
    email: '',
    telefono: '',
    contrasena: '',
    ciudad: ''
  };

  cambiarFoto(event: any) {
    // Aquí puedes manejar la lógica para cambiar la foto de perfil
  }

  guardarPerfil() {
    // Aquí puedes manejar la lógica para guardar los cambios del perfil
    console.log('Perfil guardado', this.usuario);
  }
  
}
