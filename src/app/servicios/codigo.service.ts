import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodigoService {
  private codigoCliente: string = '';

  setCodigoCliente(codigo: string): void {
    this.codigoCliente = codigo;
  }

  getCodigoCliente(): string {
    return this.codigoCliente;
  }

  clearCodigoCliente(): void {
    this.codigoCliente = '';
  }
}
