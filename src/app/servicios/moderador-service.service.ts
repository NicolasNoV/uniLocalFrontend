import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../dto/mensaje-dto';
import { Observable } from 'rxjs';
import { CambiarEstadoDTO } from '../dto/cambiar-estado-dto';
import { HistorialRevisionDTO } from '../dto/historial-revision-dto';

@Injectable({
  providedIn: 'root'
})
export class ModeradorServiceService {

  private moderadorURL = "mongodb://root:example@localhost:27017/uniLocal/api/moderador";

  constructor(private http: HttpClient) { }

  public filtrarPorEstado(estadoNegocio: String): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.moderadorURL}/filtrar-por-estado/${estadoNegocio}`);
  }

  public listarNegociosPropietario(nombrePropietario: String): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.moderadorURL}/listar-negocios-propietario/${nombrePropietario}`);
  }

  public cambiarEstado(cambiarEstado: CambiarEstadoDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.moderadorURL}/cambiar-estado`, cambiarEstado);
  }

  public registrarRevision(historialRevision: HistorialRevisionDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.moderadorURL}/registrar-revision`, historialRevision);
  }

}
