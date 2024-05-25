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
  selector: 'app-crear-oferta',
  standalone: true,
  imports: [],
  templateUrl: './crear-oferta.component.html',
  styleUrl: './crear-oferta.component.css'
})
export class CrearOfertaComponent {
  ofertaForm: FormGroup;
  ofertaDTO: CrearOfertaDTO = new CrearOfertaDTO();

  constructor(private tokenService: TokenService, private moderadorService: ModeradorServiceService, private clienteService: clienteService, private fb: FormBuilder, public negocio: NegocioDTO) {
    this.ofertaForm = this.fb.group({
      descripcion: ['', Validators.required],
      inicioOferta: ['', Validators.required],
      inicioHora: ['', Validators.required],
      finOferta: ['', Validators.required],
      finHora: ['', Validators.required],
      codigoNegocio: ['', Validators.required]
    });
   }

  onSubmit(): void {
    if (this.ofertaForm.valid) {
      const formValues = this.ofertaForm.value;

      // Crear una fecha de inicio y fin combinando la fecha y la hora
      const inicioOferta = new Date(`${formValues.inicioOferta}T${formValues.inicioHora}:00`);
      const finOferta = new Date(`${formValues.finOferta}T${formValues.finHora}:00`);

      this.ofertaDTO = {
        descripcion: formValues.descripcion,
        inicioOferta: inicioOferta,
        finOferta: finOferta,
        codigoNegocio: formValues.codigoNegocio,
        descuento: 0 // Ajusta el valor según corresponda
      };

      this.clienteService.crearOfertas(this.ofertaDTO).subscribe({
        next: (data) => {
          console.log('Oferta creada con éxito:', data);
        },
        error: (error) => {
          console.error('Error al crear la oferta:', error);
        }
      });
    }
  }




}
