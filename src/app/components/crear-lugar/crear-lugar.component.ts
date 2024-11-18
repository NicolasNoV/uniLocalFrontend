import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InicioClienteComponent } from '../inicio-cliente/inicio-cliente.component';
import { CodigoService } from '../../servicios/codigo.service';

@Component({
  selector: 'app-crear-lugar',
  templateUrl: './crear-lugar.component.html',
  styleUrls: ['./crear-lugar.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InicioClienteComponent]
})
export class CrearLugarComponent {
  lugarForm: FormGroup;
  mensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private codigoService: CodigoService
  ) {
    this.lugarForm = this.fb.group({
      longitud: 0,
      latitud: 0,
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      horarios: this.fb.array([this.crearHorarioForm()]),
      imagenes: this.fb.array(['']),
      codigoCliente: ['673a7b5f4072fe11ce63423a', Validators.required],
      tipoNegocio: ['', Validators.required],
      telefonos: this.fb.array(['', Validators.required])
    });
  }

  get horarios(): FormArray {
    return this.lugarForm.get('horarios') as FormArray;
  }

  get imagenes(): FormArray {
    return this.lugarForm.get('imagenes') as FormArray;
  }

  get telefonos(): FormArray {
    return this.lugarForm.get('telefonos') as FormArray;
  }

  crearHorarioForm(): FormGroup {
    return this.fb.group({
      dia: ['', Validators.required],
      horaApertura: ['', Validators.required],
      horaCierre: ['', Validators.required]
    });
  }

  agregarHorario(): void {
    this.horarios.push(this.crearHorarioForm());
  }

  agregarImagen(): void {
    this.imagenes.push(this.fb.control(''));
  }

  agregarTelefono(): void {
    this.telefonos.push(this.fb.control('', Validators.required));
  }

  crearNegocio(): void {
    if (this.lugarForm.valid) {
      this.http.post('http://localhost:9090/api/clientes/crear-negocio', this.lugarForm.value).subscribe({
        next: (response: any) => {
          this.mensaje = response.respuesta || 'Negocio creado correctamente';
        },
        error: (error) => {
          console.error('Error al crear el negocio:', error);
          this.mensaje = 'Error al crear el negocio';
        }
      });
    }
  }
}
