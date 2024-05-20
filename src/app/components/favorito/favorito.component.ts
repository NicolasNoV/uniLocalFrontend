import { Component } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent {
  favoritos = [
    {
      tipo: 'RESTAURANTE',
      nombre: 'Pioneiro Restaurante',
      descripcion: 'En este restaurante encontrarás la comida más deliciosa',
      imagen: 'assets/pioneiro.jpg',
      usuario: 'Luciana Hernandez'
    },
    {
      tipo: 'PANADERÍA',
      nombre: 'Panaderia Bertiz',
      descripcion: 'El mejor sitio para comprar pan',
      imagen: 'assets/panaderia.jpg',
      usuario: 'Anthony Moore'
    },
    {
      tipo: 'DISCOTECA',
      nombre: 'Paris Night',
      descripcion: 'La mejor música y bebida que podrás encontrar en la ciudad',
      imagen: 'assets/discoteca.jpg',
      usuario: 'Isaac Jirelt'
    },
    {
      tipo: 'SUPERMERCADO',
      nombre: 'Alcampo',
      descripcion: 'Supermercado con múltiples productos',
      imagen: 'assets/supermercado.jpg',
      usuario: 'Mario Rodriguez'
    }
  ];
}
