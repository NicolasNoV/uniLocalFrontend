import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InicioClienteComponent } from '../inicio-cliente/inicio-cliente.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InicioClienteComponent]
})
export class ChatComponent {
  crearChatForm: FormGroup;
  enviarMensajeForm: FormGroup;
  mensajes: any[] = [];
  mensaje: string = '';
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    // Formulario para crear un nuevo chat
    this.crearChatForm = this.fb.group({
      codigoCliente: ['', [Validators.required]],
      codigoPropietario: ['', [Validators.required]]
    });

    // Formulario para enviar mensajes en un chat existente
    this.enviarMensajeForm = this.fb.group({
      codigoChat: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
      codigoRemitente: ['', [Validators.required]]
    });
  }

  crearChat(): void {
    if (this.crearChatForm.valid) {
      this.http.post('http://localhost:9090/api/clientes/crear-chat', this.crearChatForm.value).subscribe({
        next: (response: any) => {
          this.mensaje = response.respuesta;
          this.error = '';
        },
        error: (error) => {
          console.error('Error al crear el chat:', error);
          this.error = 'Hubo un problema al crear el chat. Por favor, intenta de nuevo.';
          this.mensaje = '';
        }
      });
    } else {
      this.error = 'Por favor, completa todos los campos obligatorios para crear el chat.';
    }
  }

  enviarMensaje(): void {
    if (this.enviarMensajeForm.valid) {
      this.http.put('/api/enviar-mensaje-chat', this.enviarMensajeForm.value).subscribe({
        next: (response: any) => {
          this.mensajes = response.respuesta; // Asume que `respuesta` contiene la lista de mensajes del chat
          this.error = '';
        },
        error: (error) => {
          console.error('Error al enviar mensaje:', error);
          this.error = 'Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.';
        }
      });
    } else {
      this.error = 'Por favor, completa todos los campos obligatorios para enviar el mensaje.';
    }
  }
}
