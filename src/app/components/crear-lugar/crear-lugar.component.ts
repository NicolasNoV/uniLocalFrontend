import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { clienteService } from '../../servicios/cliente-service.service';
import { Ubicacion } from '../../dto/ubicacion';
import { TokenService } from '../../servicios/token.service';
import { NegocioDTO } from '../../dto/negocio-dto';
import { MapaService } from '../../servicios/mapa.service';

@Component({
  selector: 'app-crear-lugar',
  standalone: true,
  imports: [],
  templateUrl: './crear-lugar.component.html',
  styleUrl: './crear-lugar.component.css'
})
export class CrearLugarComponent {
  lugarForm: FormGroup;
  horarios: any[] = []; // Array para almacenar los horarios añadidos
  imagen: File | null = null; // Variable para almacenar la imagen

  constructor(
    private fb: FormBuilder, private clienteService: clienteService, private tokenService: TokenService, private mapaService: MapaService, public negocioDTO: NegocioDTO) {
    this.lugarForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      telefono: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaFin: ['', Validators.required],
      dia: ['', Validators.required],
      tipoNegocio: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.mapaService.crearMapa();
    this.mapaService.agregarMarcador().subscribe((marcador) => {
    this.negocioDTO.ubicacion.latitud = marcador.lat;
    this.negocioDTO.ubicacion.longitud = marcador.lng;
    });
    }

  anadirHorario(): void {
    const horario = {
      horaInicio: this.lugarForm.get('horaInicio')?.value,
      horaFin: this.lugarForm.get('horaFin')?.value,
      dia: this.lugarForm.get('dia')?.value
    };
    this.horarios.push(horario);
    // Resetear los campos de horario
    this.lugarForm.patchValue({
      horaInicio: '',
      horaFin: '',
      dia: ''
    });
  }

  onFileChange(event: any): void {
    if (event.target.files && event.target.files.length) {
      this.imagen = event.target.files[0];
    }
  }

  onSubmit(): void {
    if (this.lugarForm.valid) {
      const negocioDTO1 = new NegocioDTO;
      const negocioDTO = {
        ubicacion: new Ubicacion(),
        nombre: this.lugarForm.get('nombre')?.value,
        descripcion: this.lugarForm.get('descripcion')?.value,
        telefono: this.lugarForm.get('telefono')?.value,
        horarios: this.horarios,
        tipoNegocio: this.lugarForm.get('tipoNegocio')?.value,
        imagen: this.imagen,
        codigoCliente: this.tokenService.getCodigo()
      };

      this.clienteService.crearNegocio(negocioDTO1).subscribe({
        next: (data) => {
          console.log('Lugar creado con éxito:', data);
        },
        error: (error) => {
          console.error('Error al crear el lugar:', error);
        }
      });
    }
  }




}
