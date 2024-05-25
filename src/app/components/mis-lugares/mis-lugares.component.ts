import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TokenService } from '../../servicios/token.service';
import { ModeradorServiceService } from '../../servicios/moderador-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrearOfertaDTO } from '../../dto/crear-oferta-dto';
import { clienteService } from '../../servicios/cliente-service.service';
import { NegocioDTO } from '../../dto/negocio-dto';

@Component({
  selector: 'app-mis-lugares',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './mis-lugares.component.html',
  styleUrl: './mis-lugares.component.css'
})
export class MisLugaresComponent {
 
  constructor(private tokenService: TokenService, private moderadorService: ModeradorServiceService, public negocio: NegocioDTO) {
  
   }

  ngOnInit(): void {
    this.listarNegocios();
  }
  
  public listarNegocios(){

    const codigoCliente = this.tokenService.getCodigo();

    this.moderadorService.listarNegociosPropietario(codigoCliente).subscribe({
      next: (data) => {
        this.negocio = data.respuesta;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }







}
