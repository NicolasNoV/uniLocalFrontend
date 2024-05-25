import { Injectable } from '@angular/core';
import { MensajeDTO } from '../dto/mensaje-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NegocioDTO } from '../dto/negocio-dto';
import { ActualizarNegocioDTO } from '../dto/actualizar-negocio-dto';
import { BuscarNegocioDTO } from '../dto/buscar-negocio-dto';
import { ActualizarClienteDTO } from '../dto/actualizar-cliente-dto';
import { CambioPasswordDTO } from '../dto/cambio-password-dto';
import { FavoritoDTO } from '../dto/favorito-dto';
import { CrearComentarioDTO } from '../dto/crear-comentario-dto';
import { ResponderComentarioDTO } from '../dto/responder-comentario-dto';
import { EmailDTO } from '../dto/email-dto';
import { CrearOfertaDTO } from '../dto/crear-oferta-dto';
import { CrearChatDTO } from '../dto/crear-chat-dto';
import { EnviarMensajeChatDTO } from '../dto/enviar-mensaje-chat-dto';

@Injectable({
  providedIn: 'root'
})

export class clienteService {

  private clienteURL = "mongodb://root:example@localhost:27017/uniLocal/api/clientes";

  constructor(private http: HttpClient) { }

  public editarPerfil(actualizarCliente: ActualizarClienteDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.clienteURL}/editar-perfil`, actualizarCliente);
  }

  public eliminarCuenta(idCliente: string): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.clienteURL}/eliminar-cuenta/${idCliente}`);
  }

  public cambiarPassword(cambioPassword: CambioPasswordDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.clienteURL}/cambiar-password`, cambioPassword);
  }

  public obtenerCliente(id: String): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clienteURL}/obtener-cliente/${id}`);
  }

  public listarClientes(pagina: Number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clienteURL}/listar-clientes/${pagina}`);
  }

  public agregarNegociosFavoritos(favorito: FavoritoDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.clienteURL}/agregar-negocio-favorito`, favorito);
  }

  public quitarNegociosFavoritos(favorito: FavoritoDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.clienteURL}/quitar-negocio-favorito`, favorito);
  }

  public recomendarNegocioBusqueda(codigoUsuario: String): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clienteURL}/quitar-negocio-favoritorecomendar-negocio-busqueda/${codigoUsuario}`);
  }

  public crearComentario(crearComentario: CrearComentarioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.clienteURL}/crear-comentario`, crearComentario);
  }

  public responderComentario(responderComentario: ResponderComentarioDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.clienteURL}/responder-comentario`, responderComentario);
  }
  
  public enviarCorreo(email: EmailDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.clienteURL}/enviar-correo`, email);
  }

  public subirImagen(imagen: FormData): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.clienteURL}/subir-imagen`, imagen);
  }

  public eliminarImagen(idImagen: String): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.clienteURL}/eliminar-imagen/${idImagen}`);
  }

  public crearNegocio(negocio: NegocioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.clienteURL}/crear-negocio`, negocio);
  }

  public actualizarNegocio(actualizarNegocio: ActualizarNegocioDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.clienteURL}/actualizar-negocio`, actualizarNegocio);
  }

  public eliminarNegocio(codigoNegocio: String): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.clienteURL}/eliminar-negocio/${codigoNegocio}`);
  }

  public buscarNegocios(buscarNegocio: String): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.clienteURL}/buscar-negocios`, buscarNegocio);
  }

  public crearOfertas(crearOferta: CrearOfertaDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.clienteURL}/crear-ofertas`, crearOferta);
  }

  public crearChat(crearChat: CrearChatDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.clienteURL}/crear-chat`, crearChat);
  }

  public enviarMensajeChat(enviarMensajeChat: EnviarMensajeChatDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.clienteURL}/crear-chat`, enviarMensajeChat);
  }
    
}