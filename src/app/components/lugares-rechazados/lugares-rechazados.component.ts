import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares-rechazados',
  standalone: true,
  imports: [],
  templateUrl: './lugares-rechazados.component.html',
  styleUrl: './lugares-rechazados.component.css'
})
export class LugaresRechazadosComponent {
  lugares = [
    {
      nombre: 'La Esquina',
      tipo: 'RESTAURANTE',
      descripcion: 'En este restaurante encontrarás la comida más deliciosa',
      usuario: 'Luciana Hernandez',
      fecha: '27/02/24',
      imagen: 'assets/la-esquina.jpg'
    },
    {
      nombre: 'Pan Real',
      tipo: 'PANADERIA',
      descripcion: 'El mejor sitio para comprar pan',
      usuario: 'Anthony Moore',
      fecha: '27/02/24',
      imagen: 'assets/pan-real.jpg'
    },
    {
      nombre: 'Disco',
      tipo: 'DISCO',
      descripcion: 'La mejor música y bebida que podrás encontrar en la ciudad',
      usuario: 'Isaac Jirelt',
      fecha: '27/02/24',
      imagen: 'assets/disco.jpg'
    },
    {
      nombre: 'Olimpica',
      tipo: 'SUPERMERCADO',
      descripcion: 'Supermercado con múltiples productos',
      usuario: 'Mario Rodriguez',
      fecha: '27/02/24',
      imagen: 'assets/olimpica.jpg'
    }
  ];
}
