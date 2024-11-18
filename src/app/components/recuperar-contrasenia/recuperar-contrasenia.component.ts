import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.component.html',
  styleUrls: ['./recuperar-contrasenia.component.css'],
  standalone: true, // Especifica que es un componente standalone
  imports: [CommonModule, ReactiveFormsModule] // Importa los módulos necesarios directamente en el componente
})
export class RecuperarContraseniaComponent {
  recuperarForm: FormGroup;
  mensaje: string = '';
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.recuperarForm = this.fb.group({
      nuevaPassword: ['', [Validators.required, Validators.minLength(5)]],
      id: ['', [Validators.required]],
      token: ['', [Validators.required]]
    });
  }

  recuperarPassword(): void {
    if (this.recuperarForm.valid) {
      this.http.put('http://localhost:9090/api/clientes/cambiar-password', this.recuperarForm.value).subscribe({
        next: (response: any) => {
          this.mensaje = response.respuesta; // Asume que `respuesta` contiene el mensaje de éxito
          this.error = '';
          // Redirigir al login después de recuperar la contraseña (opcional)
          setTimeout(() => this.router.navigate(['/login']), 2000);
        },
        error: (error) => {
          console.error('Error al cambiar la contraseña:', error);
          this.error = 'Hubo un problema al cambiar la contraseña. Por favor, intenta de nuevo.';
          this.mensaje = '';
        }
      });
    } else {
      this.error = 'Por favor, completa todos los campos correctamente.';
    }
  }
}
