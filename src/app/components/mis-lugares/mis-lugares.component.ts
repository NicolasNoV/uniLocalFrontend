import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioClienteComponent } from '../inicio-cliente/inicio-cliente.component';
import { CodigoService } from '../../servicios/codigo.service';

interface HorarioDTO {
  dia: string;
  horaApertura: string;
  horaCierre: string;
}

interface NegocioEncontradoDTO {
  longitud: number;
  latitud: number;
  nombre: string;
  descripcion: string;
  horarios: HorarioDTO[];
  imagenes: string[];
  codigoCliente: string;
  tipoNegocio: string;
  telefonos: string[];
  tipoBusqueda: string;
  codigoNegocio: string; // Se añade esta propiedad al DTO para manejar el código del negocio
}

@Component({
  selector: 'app-mis-lugares',
  templateUrl: './mis-lugares.component.html',
  styleUrls: ['./mis-lugares.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InicioClienteComponent],
})
export class MisLugaresComponent implements OnInit {
  negocios: NegocioEncontradoDTO[] = [];
  nombrePropietario: string = '';
  mensaje: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private codigoCliente: CodigoService
  ) {}

  ngOnInit(): void {}

  listarNegocios(): void {
    const codigoCliente = this.codigoCliente.getCodigoCliente(); // Obtén el código desde el servicio
    this.http.get(`http://localhost:9090/api/moderador/listar-negocios-propietario/${codigoCliente}`).subscribe({
      next: (response: any) => {
        this.negocios = response.respuesta;
        if (this.negocios.length === 0) {
          this.mensaje = 'No se encontraron negocios para el propietario especificado.';
        } else {
          this.mensaje = '';
        }
      },
      error: (error) => {
        console.error('Error al listar los negocios:', error);
        this.mensaje = 'Error al listar los negocios.';
      },
    });
  }

  editarNegocio(codigoNegocio: string): void {
    // Encuentra el negocio a editar
    const negocioAEditar = this.negocios.find(n => n.codigoNegocio === codigoNegocio);
    if (negocioAEditar) {
      // Almacena los datos del negocio en el almacenamiento local (localStorage)
      localStorage.setItem('negocioAEditar', JSON.stringify(negocioAEditar));
      this.router.navigate(['/editar-negocio']); // Redirige a la interfaz de edición
    } else {
      alert('No se encontró el negocio a editar.');
    }
  }

  eliminarNegocio(codigoNegocio: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este negocio? Esta acción no se puede deshacer.')) {
      this.http.delete(`http://localhost:9090/api/moderador/eliminar-negocio/${codigoNegocio}`).subscribe({
        next: () => {
          alert('Negocio eliminado correctamente.');
          this.listarNegocios(); // Vuelve a cargar la lista de negocios
        },
        error: (error) => {
          console.error('Error al eliminar el negocio:', error);
          alert('Hubo un problema al eliminar el negocio. Por favor, intenta de nuevo.');
        },
      });
    }
  }
}
