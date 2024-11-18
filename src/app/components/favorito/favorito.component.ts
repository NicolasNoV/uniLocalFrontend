import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InicioClienteComponent } from '../inicio-cliente/inicio-cliente.component';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InicioClienteComponent]
})
export class FavoritoComponent {
  favoritoForm: FormGroup;
  mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.favoritoForm = this.fb.group({
      codigoNegocio: ['', Validators.required],
      codigoCliente: ['', Validators.required]
    });
  }

  agregarFavorito(): void {
    if (this.favoritoForm.valid) {
      this.http.post('http://localhost:9090/api/clientes/agregar-negocio-favorito', this.favoritoForm.value).subscribe({
        next: (response: any) => {
          this.mensaje = response.respuesta || 'Negocio agregado a favoritos correctamente';
        },
        error: (error) => {
          console.error('Error al agregar negocio a favoritos:', error);
          this.mensaje = 'Error al agregar negocio a favoritos';
        }
      });
    }
  }

  quitarFavorito(): void {
    if (this.favoritoForm.valid) {
      this.http.post('http://localhost:9090/api/quitar-negocio-favorito', this.favoritoForm.value).subscribe({
        next: (response: any) => {
          this.mensaje = response.respuesta || 'Negocio quitado de favoritos correctamente';
        },
        error: (error) => {
          console.error('Error al quitar negocio de favoritos:', error);
          this.mensaje = 'Error al quitar negocio de favoritos';
        }
      });
    }
  }
}
