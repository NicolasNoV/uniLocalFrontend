import { Component } from '@angular/core';
import { EnviarMensajeChatDTO } from '../../dto/enviar-mensaje-chat-dto';

@Component({
  selector: 'app-detalle-lugar',
  templateUrl: './detalle-lugar.component.html',
  styleUrls: ['./detalle-lugar.component.css']
})
export class DetalleLugarComponent {
  horarios = [
    { dia: 'Lunes', apertura: '10:00 AM', cierre: '10:00 PM' },
    { dia: 'Martes', apertura: '10:00 AM', cierre: '10:00 PM' },
    // Agrega los demás días de la semana
  ];

  comentarios = [
    { usuario: 'Jinny Oslin', fecha: 'Hace 1 día', texto: 'Buen lugar.', puntaje: 4 },
    { usuario: 'Vera', fecha: 'Hace 1 día', texto: 'Excelente servicio.', puntaje: 5 },
    // Otros comentarios
  ];

  nuevoComentario = new EnviarMensajeChatDTO();

  agregarComentario() {
    this.comentarios.push({
      usuario: this.nuevoComentario.codigoRemitente,
      fecha: 'Hace un momento',
      texto: this.nuevoComentario.mensaje,
      puntaje: 5 // Puedes ajustar el puntaje si es necesario
    });
    this.nuevoComentario = new EnviarMensajeChatDTO();
  }
}
