import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InicioClienteComponent } from '../inicio-cliente/inicio-cliente.component';

@Component({
  selector: 'app-crear-oferta',
  templateUrl: './crear-oferta.component.html',
  styleUrls: ['./crear-oferta.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InicioClienteComponent]
})
export class CrearOfertaComponent {
  ofertaForm: FormGroup;
  mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.ofertaForm = this.fb.group({
      descuento: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      codigoNegocio: ['', Validators.required],
      descripcion: ['', Validators.required],
      inicioOferta: ['', Validators.required],
      finOferta: ['', Validators.required]
    });
  }

  crearOferta(): void {
    if (this.ofertaForm.valid) {
      this.http.post('http://localhost:9090/api/clientes/crear-ofertas', this.ofertaForm.value).subscribe({
        next: (response: any) => {
          this.mensaje = response.respuesta || 'Oferta creada correctamente';
        },
        error: (error) => {
          console.error('Error al crear la oferta:', error);
          this.mensaje = 'Error al crear la oferta';
        }
      });
    }
  }
}
