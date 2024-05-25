import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
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
