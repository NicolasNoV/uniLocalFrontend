import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class BusquedaComponent {
  busquedaForm: FormGroup;
  resultados: any[] = [];
  mensaje: string = '';
  error: string = '';

  tiposNegocio = [
    { label: 'Restaurante', value: 'RESTAURANTE' },
    { label: 'Tienda', value: 'TIENDA' },
    { label: 'Cafetería', value: 'CAFETERIA' }
    // Agrega otros tipos de negocio según tu aplicación
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.busquedaForm = this.fb.group({
      busqueda: ['', [Validators.required]],
      tipoNegocio: ['', [Validators.required]],
      idCliente: ['', [Validators.required]]
    });
  }

  buscarNegocios(): void {
    if (this.busquedaForm.valid) {
      this.http.post('/api/buscar-negocios', this.busquedaForm.value).subscribe({
        next: (response: any) => {
          this.resultados = response.respuesta; // Asume que `respuesta` contiene la lista de negocios
          this.mensaje = 'Búsqueda completada con éxito.';
          this.error = '';
        },
        error: (error) => {
          console.error('Error al buscar negocios:', error);
          this.error = 'Hubo un problema al realizar la búsqueda. Por favor, intenta de nuevo.';
          this.mensaje = '';
          this.resultados = [];
        }
      });
    } else {
      this.error = 'Por favor, completa todos los campos obligatorios.';
      this.resultados = [];
    }
  }
}
