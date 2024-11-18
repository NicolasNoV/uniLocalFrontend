import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InicioClienteComponent } from '../inicio-cliente/inicio-cliente.component';
import { CodigoService } from '../../servicios/codigo.service';

@Component({
  selector: 'app-perfil',
  standalone: true,  // Marcar el componente como standalone
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, InicioClienteComponent],  // Importar módulos necesarios
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfilForm: FormGroup;
  mensaje: string = '';
  error: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private codigoService: CodigoService
  ) {
    this.perfilForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
      correoElectronico: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      ciudad: ['', [Validators.required, Validators.maxLength(50)]],
      fotoPerfil: [''],
      id: [this.codigoService.getCodigoCliente()]
    });
  }

  ngOnInit(): void {
    this.cargarDatosPerfil();
  }

  cargarDatosPerfil(): void {
    // Obtén el código del cliente
    const codigoCliente = this.codigoService.getCodigoCliente();
  
    if (!codigoCliente) {
      console.error('Error: código de cliente no disponible.');
      return;
    }
  
    // Construye la URL con el parámetro
    this.http.get(`http://localhost:9090/api/clientes/cargar-perfil/${codigoCliente}`).subscribe({
      next: (response: any) => {
        // Actualiza el formulario con los datos recibidos
        this.perfilForm.patchValue(response.respuesta);
      },
      error: (error) => {
        console.error('Error al cargar datos del perfil:', error);
      },
    });
  }
  
  editarPerfil(): void {
    if (this.perfilForm.valid) {
      this.http.put('http://localhost:9090/api/clientes/editar-perfil', this.perfilForm.value).subscribe({
        next: (response: any) => {
          this.mensaje = response.respuesta;
          this.error = '';
        },
        error: (error) => {
          console.error('Error al editar perfil:', error);
          this.error = 'Hubo un problema al editar el perfil. Por favor, intenta de nuevo.';
          this.mensaje = '';
        }
      });
    } else {
      this.error = 'Por favor, completa todos los campos obligatorios correctamente.';
    }
  }

  eliminarPerfil(): void {
    const idCliente = this.codigoService.getCodigoCliente();
  
    if (!idCliente) {
      console.error('Error: ID de cliente no disponible.');
      return;
    }
  
    if (confirm('¿Estás seguro de que deseas eliminar tu perfil? Esta acción no se puede deshacer.')) {
      this.http.delete(`http://localhost:9090/api/clientes/eliminar-cuenta/${idCliente}`).subscribe({
        next: (response: any) => {
          alert('Tu cuenta ha sido eliminada correctamente.');
          this.codigoService.clearCodigoCliente(); // Limpia el código de cliente del servicio
          this.router.navigate(['/login']); // Redirige al login
        },
        error: (error) => {
          console.error('Error al eliminar el perfil:', error);
          alert('Ocurrió un problema al intentar eliminar tu cuenta. Por favor, inténtalo de nuevo.');
        }
      });
    }
  }
}
