import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensaje-dto';
import { ImagenDTO } from '../dto/imagen-dto';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  private imgURL = "mongodb://root:example@localhost:27017/uniLocal/api/sinRol";

  constructor(private http: HttpClient) { }

  public subir(imagen: FormData): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.imgURL}/subir-imagen`, imagen);
  }

  public eliminar(imagenDTO: ImagenDTO): Observable<MensajeDTO> {
    return this.http.request<MensajeDTO>('delete', `${this.imgURL}/eliminar-imagen`, { body: imagenDTO
});
  }

}