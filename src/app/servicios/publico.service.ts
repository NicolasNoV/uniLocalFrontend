import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensaje-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class PublicoService {

  private publicoURL = "mongodb://root:example@localhost:27017/uniLocal/api/sinRol";

  constructor(private http: HttpClient) { }

  public listarCiudades(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/listar-ciudades`);
  }

  public listarTiposNegocio(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/listar-tipo-negocio`);
  }

}