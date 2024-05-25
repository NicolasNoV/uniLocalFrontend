import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares-aceptados',
  standalone: true,
  imports: [],
  templateUrl: './lugares-aceptados.component.html',
  styleUrl: './lugares-aceptados.component.css'
})
export class LugaresAceptadosComponent {
  lugares = [
    {
      nombre: 'La Cabrera',
      tipo: 'RESTAURANTE',
      descripcion: 'En este restaurante encontrarás la comida más deliciosa',
      usuario: 'Luciana Hernandez',
      fecha: '27/02/24',
      imagen: 'assets/la-cabrera.jpg'
    },
    {
      nombre: 'El Taller',
      tipo: 'PANADERIA',
      descripcion: 'El mejor sitio para comprar pan',
      usuario: 'Anthony Moore',
      fecha: '27/02/24',
      imagen: 'assets/el-taller.jpg'
    },
    {
      nombre: 'Ganelas',
      tipo: 'DISCO',
      descripcion: 'La mejor música y bebida que podrás encontrar en la ciudad',
      usuario: 'Isaac Jirelt',
      fecha: '27/02/24',
      imagen: 'assets/ganelas.jpg'
    },
    {
      nombre: 'Superama',
      tipo: 'SUPERMERCADO',
      descripcion: 'Supermercado con múltiples productos',
      usuario: 'Mario Rodriguez',
      fecha: '27/02/24',
      imagen: 'assets/superama.jpg'
    }
  ];
}
