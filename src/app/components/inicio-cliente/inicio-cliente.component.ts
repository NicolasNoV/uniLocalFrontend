import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './inicio-cliente.component.html',
  styleUrls: ['./inicio-cliente.component.css']
})
export class InicioClienteComponent {
  recomendaciones = [
    { nombre: 'La Cabrera', imagen: 'assets/lacabrera.jpg' },
    { nombre: 'Pioneiro Restaurante', imagen: 'assets/pioneiro.jpg' },
    { nombre: 'El Taller', imagen: 'assets/eltaller.jpg' },
    { nombre: 'Canelas', imagen: 'assets/canelas.jpg' },
    { nombre: 'Lugares Favoritos', imagen: 'assets/lugaresfavoritos.jpg' },
    { nombre: 'Superama', imagen: 'assets/superama.jpg' }
  ];
}
