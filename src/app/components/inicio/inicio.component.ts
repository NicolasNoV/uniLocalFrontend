import { Component, OnInit } from '@angular/core';
import { MapaService } from '../../servicios/mapa.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private mapaService: MapaService) { }

  ngOnInit(): void {
    this.mapaService.crearMapa();
    this.cargarNegocios();
  }

  cargarNegocios(): void {
    const nombrePropietario = 'Carlitos'; // Aquí deberías reemplazar con el nombre del usuario real o ID
    
    this.mapaService.obtenerNegocios(nombrePropietario).subscribe({
      next: (response: any) => {
        const negocios = response.respuesta;
        if (negocios && negocios.length > 0) {
          this.mapaService.pintarMarcadores(negocios);
        } else {
          console.log('No se encontraron negocios para este usuario.');
        }
      },
      error: (error) => {
        console.error('Error al cargar negocios:', error);
      }
    });
  }
}
