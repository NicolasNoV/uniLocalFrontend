import { Component } from '@angular/core';
import { RegistroClienteDTO } from '../../dto/registro-cliente-dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PublicoService } from '../../servicios/publico.service';
import { AuthService } from '../../servicios/auth.service';
import { AlertaComponent } from "../alerta/alerta.component";
import { Alerta } from '../../dto/alerta';
import { ImagenService } from '../../servicios/imagen.service';

@Component({
    selector: 'app-registro',
    standalone: true,
    templateUrl: './registro.component.html',
    styleUrl: './registro.component.css',
    imports: [FormsModule, CommonModule, AlertaComponent]
})



export class RegistroComponent {
[x: string]: any;
public esFormularioValido: boolean = false;
  alerta!:Alerta;
  registroClienteDTO: RegistroClienteDTO;
  ciudades: string[];
  archivos!:FileList;

  constructor(private publicoService: PublicoService, private authService: AuthService, private imagenService: ImagenService) {
    this.registroClienteDTO = new RegistroClienteDTO();
    this.ciudades = [];
    this.cargarCiudades();
  }

  public registrar() {
    // Verifica que se haya subido una imagen
    if (this.registroClienteDTO.fotoPerfil && this.registroClienteDTO.fotoPerfil.trim() !== "") {

      if (this.isImage(this.registroClienteDTO.fotoPerfil)) {
        this.authService.registrarCliente(this.registroClienteDTO).subscribe({
          next: (data) => {
            this.alerta = new Alerta(data.respuesta, "success");
          },
          error: (error) => {
            this.alerta = new Alerta(error.error.respuesta, "danger");
          }
        });
      } else {
        this.alerta = new Alerta("El archivo subido debe ser una imagen", "danger");
      }
    } else {
      this.alerta = new Alerta("Debe subir una imagen", "danger");
    }
  }
  
  // Método para verificar si el archivo es una imagen
  private isImage(filePath: string): boolean {
    const validImageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const fileExtension = filePath.split('.').pop()?.toLowerCase();
    return validImageExtensions.includes(fileExtension || '');
  }
  

  public sonIguales(): boolean {
    return this.registroClienteDTO.password == this.registroClienteDTO.confirmaPassword;
  }

  private cargarCiudades() {
    this.publicoService.listarCiudades().subscribe({
      next: (data: { respuesta: string[]; }) => {
        this.ciudades = data.respuesta;
      },
      error: (error: any) => {
        console.log("Error al cargar las ciudades");
      }
    });
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
      this.registroClienteDTO.fotoPerfil = this.archivos[0].name;
    }
  }

  public subirImagen() {

    if (this.archivos != null && this.archivos.length > 0) {

      const formData = new FormData();
      formData.append('file', this.archivos[0]);

      this.imagenService.subir(formData).subscribe({
        next: data => {
          this.registroClienteDTO.fotoPerfil = data.respuesta.url;
          this.alerta = new Alerta("Se ha subido la foto", "success");
        },
        error: error => {
          this.alerta = new Alerta(error.error, "danger");
        }
      });

    } else {
      this.alerta = new Alerta("Debe seleccionar una imagen y subirla", "danger");
    }

  }

  public validarCampos(): void {
    const nombreValido = this.registroClienteDTO.nombre.trim() !== '';
    const fotoValida = this.archivos !== null;
    const ciudadValida = this.registroClienteDTO.ciudadResidencia !== '';
    const nicknameValido = this.registroClienteDTO.nickname.trim() !== '';
    const emailValido = this.registroClienteDTO.correoElectronico.trim() !== '' && /\S+@\S+\.\S+/.test(this.registroClienteDTO.correoElectronico);
    const passwordValido = this.registroClienteDTO.password.trim().length >= 8;
    const confirmaPasswordValido = this.registroClienteDTO.confirmaPassword.trim() !== '' && this.sonIguales();

    this.esFormularioValido = nombreValido && fotoValida && ciudadValida && nicknameValido && emailValido && passwordValido && confirmaPasswordValido;
}





}
