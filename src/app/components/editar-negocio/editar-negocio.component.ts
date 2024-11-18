import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HorarioDTO } from '../../dto/horario-dto';

@Component({
  selector: 'app-editar-negocio',
  templateUrl: './editar-negocio.component.html',
  styleUrls: ['./editar-negocio.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Importa ReactiveFormsModule aquí
})
export class EditarNegocioComponent implements OnInit {
  negocioForm!: FormGroup;
  mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  // El resto del código del componente permanece igual
  ngOnInit(): void {
    const negocioAEditar = localStorage.getItem('negocioAEditar');
    if (negocioAEditar) {
      const negocio = JSON.parse(negocioAEditar);

      this.negocioForm = this.fb.group({
        codigoNegocio: [negocio.codigoNegocio, Validators.required],
        longitud: [negocio.longitud, [Validators.required, Validators.min(-180), Validators.max(180)]],
        latitud: [negocio.latitud, [Validators.required, Validators.min(-90), Validators.max(90)]],
        nombre: [negocio.nombre, Validators.required],
        descripcion: [negocio.descripcion, Validators.required],
        horarios: this.fb.array(negocio.horarios.map((h: any) => this.crearHorario(h))),
        imagenes: this.fb.array(negocio.imagenes.map((img: string) => this.fb.control(img, Validators.required))),
        codigoCliente: [negocio.codigoCliente, Validators.required],
        tipoNegocio: [negocio.tipoNegocio, Validators.required],
        telefonos: this.fb.array(negocio.telefonos.map((tel: string) => this.fb.control(tel, Validators.required))),
      });
    } else {
      alert('No se encontraron datos del negocio para editar.');
      this.router.navigate(['/mis-lugares']);
    }
  }

  get horarios(): FormArray {
    return this.negocioForm.get('horarios') as FormArray;
  }

  get imagenes(): FormArray {
    return this.negocioForm.get('imagenes') as FormArray;
  }

  get telefonos(): FormArray {
    return this.negocioForm.get('telefonos') as FormArray;
  }
  
  crearHorario(horario?: HorarioDTO): FormGroup {
    return this.fb.group({
      dia: [horario?.dia || '', Validators.required],
      horaApertura: [horario?.horaInicio || '', Validators.required],
      horaCierre: [horario?.horaFin || '', Validators.required],
    });
  }

  agregarHorario(): void {
    this.horarios.push(this.crearHorario());
  }

  eliminarHorario(index: number): void {
    this.horarios.removeAt(index);
  }

  agregarImagen(): void {
    this.imagenes.push(this.fb.control('', Validators.required));
  }

  eliminarImagen(index: number): void {
    this.imagenes.removeAt(index);
  }

  agregarTelefono(): void {
    this.telefonos.push(this.fb.control('', Validators.required));
  }

  eliminarTelefono(index: number): void {
    this.telefonos.removeAt(index);
  }

  guardarCambios(): void {
    if (this.negocioForm.valid) {
      const negocioActualizado = this.negocioForm.value;
      this.http.put('http://localhost:9090/api/moderador/actualizar-negocio', negocioActualizado).subscribe({
        next: () => {
          alert('Negocio actualizado correctamente.');
          this.router.navigate(['/mis-lugares']);
        },
        error: (err) => {
          console.error('Error al actualizar el negocio:', err);
          this.mensaje = 'Hubo un problema al actualizar el negocio. Por favor, intenta de nuevo.';
        },
      });
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }
}

