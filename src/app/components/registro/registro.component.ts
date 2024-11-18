import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class RegistroComponent {
  registroForm: FormGroup;
  mensaje: string = '';
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.registroForm = this.fb.group({
      nickname: ['', [Validators.required, Validators.maxLength(10)]],
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
      correoElectronico: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      password: ['', [Validators.required, Validators.minLength(7)]],
      ciudad: ['', [Validators.required, Validators.maxLength(50)]],
      fotoPerfil: [''] // Campo opcional
    });
  }

  registrarse(): void {
    if (this.registroForm.valid) {
      this.http.post('http://localhost:9090/api/sinRol/registrarse', this.registroForm.value).subscribe({
        next: (response: any) => {
          this.mensaje = response.respuesta;
          this.error = '';
          // Redirigir al inicio de sesión después del registro
          setTimeout(() => this.router.navigate(['/login']), 2000);
        },
        error: (error) => {
          console.error('Error al registrarse:', error);
          this.error = 'Hubo un problema al registrarse. Por favor, intenta de nuevo.';
          this.mensaje = '';
        }
      });
    } else {
      this.error = 'Por favor, completa todos los campos correctamente.';
    }
  }
}
