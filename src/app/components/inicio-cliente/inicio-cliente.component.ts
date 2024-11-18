import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BuscarComponent } from "../buscar/buscar.component";

@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.component.html',
  standalone: true,
  styleUrls: ['./inicio-cliente.component.css'],
  imports: [BuscarComponent]
})
export class InicioClienteComponent {
  seccionActiva: string = 'Inicio'; // Inicializa con la sección por defecto

  constructor(private router: Router) {}

  irAInicio(): void {
    this.seccionActiva = 'Inicio';
    this.router.navigate(['/home']);
  }

  irACrearLugar(): void {
    this.seccionActiva = 'Crear Lugar';
    this.router.navigate(['/crear-lugar']);
  }

  irACrearOferta(): void {
    this.seccionActiva = 'Crear Oferta';
    this.router.navigate(['/crear-oferta']);
  }

  irAFavoritos(): void {
    this.seccionActiva = 'Favoritos';
    this.router.navigate(['/favorito']);
  }

  irAMisLugares(): void {
    this.seccionActiva = 'Mis Lugares';
    this.router.navigate(['/mis-lugares']);
  }

  irAPerfil(): void {
    this.seccionActiva = 'Perfil';
    this.router.navigate(['/perfil']);
  }

  irAChat(): void {
    this.seccionActiva = 'Chat';
    this.router.navigate(['/chat']);
  }
}
