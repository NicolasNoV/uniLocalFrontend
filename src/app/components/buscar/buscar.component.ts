import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Importar HttpClient para realizar solicitudes HTTP
import { FormsModule } from '@angular/forms'; // Importar FormsModule para usar ngModel
import { CommonModule } from '@angular/common'; // Para usar directivas básicas

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  standalone: true,
  styleUrls: ['./buscar.component.css'],
  imports: [FormsModule, CommonModule], // Importar FormsModule
})
export class BuscarComponent {
  busqueda: string = '';
  tipoNegocio: string = 'COMERCIO'; // Valor predeterminado para TipoNegocio
  idCliente: string = '12345'; // ID ficticio para pruebas

  constructor(private router: Router, private http: HttpClient) {}

  realizarBusqueda(): void {
    const payload = {
      busqueda: this.busqueda,
      tipoNegocio: 'CAFETERIA', // Ajusta según corresponda
      idCliente: '12345' // Ajusta con el ID del cliente
    };
  
    this.http.post('http://localhost:9090/api/clientes/buscar-negocios', payload)
    .subscribe({
      next: (response: any) => {
        const resultados = response.data; // Extrae solo el arreglo
        this.router.navigate(['/resultado-busqueda'], { state: { resultados } });
      },
      error: (error) => {
        console.error('Error:', error);
        alert('Ocurrió un error al realizar la búsqueda. Inténtalo más tarde.');
      }
    });
  }
  
}
