import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioClienteComponent } from '../inicio-cliente/inicio-cliente.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, InicioClienteComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
