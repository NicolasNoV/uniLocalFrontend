import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lugares-filtrados',
  standalone: true,
  templateUrl: './lugares-filtrados.component.html',
  styleUrls: ['./lugares-filtrados.component.css']
})
export class LugaresFiltradosComponent implements OnInit {
  estadosNegocio = ['APROBADO', 'RECHAZADO', 'PENDIENTE'];
  negocios: any[] = [];
  mensaje: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  filtrarPorEstado(event: Event): void {
    const estado = (event.target as HTMLSelectElement).value;  // Hacemos el casting aquí
  
    this.http.get(`http://localhost:9090/api/moderador/filtrar-por-estado/${estado}`).subscribe({
      next: (response: any) => {
        this.negocios = response.data;
        this.mensaje = response.mensaje || '';
      },
      error: (error) => {
        console.error('Error al filtrar negocios:', error);
        this.mensaje = 'Error al obtener los negocios filtrados';
      }
    });
  }
  
}
