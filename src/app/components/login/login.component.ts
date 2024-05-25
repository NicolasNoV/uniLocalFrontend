import { Component } from '@angular/core';
import { Alerta } from '../../dto/alerta';
import { TokenService } from '../../servicios/token.service';
import { AuthService } from '../../servicios/auth.service';
import { LoginDTO } from '../../dto/login-dto';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  alerta!:Alerta;
  loginDTO!:LoginDTO;

  constructor(private tokenService: TokenService, private authService: AuthService) {

  }

  public login() {

    this.authService.loginCliente(this.loginDTO).subscribe({
      next: data => {
        this.tokenService.login(data.respuesta.token);
      },
      error: error => {
        this.alerta = new Alerta(error.error.respuesta, "danger" );
      }
    });
  }

}
