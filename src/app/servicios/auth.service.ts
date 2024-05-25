import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../dto/mensaje-dto';
import { RegistroClienteDTO } from '../dto/registro-cliente-dto';
import { LoginDTO } from '../dto/login-dto';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})

export class AuthService {
private authURL = "mongodb://root:example@localhost:27017/uniLocal/api/sinRol";
constructor(private http: HttpClient) { }

public registrarCliente(cliente: RegistroClienteDTO): Observable<MensajeDTO> {
  return this.http.post<MensajeDTO>(`${this.authURL}/registrarse`, cliente);
}

public loginCliente(loginDTO: LoginDTO): Observable<MensajeDTO> {
  return this.http.post<MensajeDTO>(`${this.authURL}/iniciar-sesion-cliente`, loginDTO);
}

}