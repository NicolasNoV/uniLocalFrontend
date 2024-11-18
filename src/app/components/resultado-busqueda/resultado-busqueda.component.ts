import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InicioClienteComponent } from '../inicio-cliente/inicio-cliente.component';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  standalone: true,
  styleUrls: ['./resultado-busqueda.component.css'],
  imports: [CommonModule, InicioClienteComponent],
})
export class ResultadoBusquedaComponent {
  resultados: any[] = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const stateResultados = navigation?.extras.state?.['resultados'];
    
    // Si `stateResultados` no es un array, lo convertimos.
    this.resultados = Array.isArray(stateResultados) ? stateResultados : [stateResultados];
  }
}
