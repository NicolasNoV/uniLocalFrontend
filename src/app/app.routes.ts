import { Routes } from '@angular/router';

import { BuscarComponent } from './components/buscar/buscar.component';
import { ChatComponent } from './components/chat/chat.component';
import { CrearLugarComponent } from './components/crear-lugar/crear-lugar.component';
import { CrearOfertaComponent } from './components/crear-oferta/crear-oferta.component';
import { DetalleLugarComponent } from './components/detalle-lugar/detalle-lugar.component';
import { EditarNegocioComponent } from './components/editar-negocio/editar-negocio.component';
import { FavoritoComponent } from './components/favorito/favorito.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';
import { InicioClienteComponent } from './components/inicio-cliente/inicio-cliente.component';
import { LoginComponent } from './components/login/login.component';
import { LugaresFiltradosComponent } from './components/lugares-filtrados/lugares-filtrados.component';
import { MisLugaresComponent } from './components/mis-lugares/mis-lugares.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RecuperarContraseniaComponent } from './components/recuperar-contrasenia/recuperar-contrasenia.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ResultadoBusquedaComponent } from './components/resultado-busqueda/resultado-busqueda.component';

export const routes: Routes = [
  { path: 'buscar', component: BuscarComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'crear-lugar', component: CrearLugarComponent },
  { path: 'crear-oferta', component: CrearOfertaComponent },
  { path: 'detalle-lugar', component: DetalleLugarComponent },
  { path: 'editar-negocio', component: EditarNegocioComponent},
  { path: 'favorito', component: FavoritoComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige al login al iniciar
  { path: 'inicio-admin', component: InicioAdminComponent },
  { path: 'inicio-cliente', component: InicioClienteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'lugares-filtrados', component: LugaresFiltradosComponent },
  { path: 'mis-lugares', component: MisLugaresComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'recuperar-contrasenia', component: RecuperarContraseniaComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'resultado-busqueda', component: ResultadoBusquedaComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' } // Redirección genérica al login si la ruta no existe
];
