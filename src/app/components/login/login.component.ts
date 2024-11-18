import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CodigoService } from '../../servicios/codigo.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private codigoService : CodigoService
  ) {
    this.loginForm = this.fb.group({
      correoElectronico: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  iniciarSesionCliente(): void {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:9090/api/sinRol/iniciar-sesion-cliente', this.loginForm.value, { responseType: 'text' }).subscribe({
        next: (response: string) => {
          this.mensaje = 'Inicio de sesión de cliente exitoso';
          console.log('Código del cliente:', response);
      
          // Almacenar el código en el servicio
          this.codigoService.setCodigoCliente(response);
      
          // Redirigir al componente de inicio
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Error al iniciar sesión de cliente:', error);
          this.mensaje = 'Error al iniciar sesión de cliente';
        },
      });
      
    }
  }

  registrarse(): void {
    this.router.navigate(['/registro']); // Navega al componente de registro
  }
}
