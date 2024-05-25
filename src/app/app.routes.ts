import { Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { CrearLugarComponent } from './components/crear-lugar/crear-lugar.component';
import { CrearOfertaComponent } from './components/crear-oferta/crear-oferta.component';
import { DetalleLugarComponent } from './components/detalle-lugar/detalle-lugar.component';
import { FavoritoComponent } from './components/favorito/favorito.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';
import { InicioClienteComponent } from './components/inicio-cliente/inicio-cliente.component';
import { LoginComponent } from './components/login/login.component';
import { LugaresAceptadosComponent } from './components/lugares-aceptados/lugares-aceptados.component';
import { LugaresPendientesComponent } from './components/lugares-pendientes/lugares-pendientes.component';
import { LugaresRechazadosComponent } from './components/lugares-rechazados/lugares-rechazados.component';
import { MisLugaresComponent } from './components/mis-lugares/mis-lugares.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RecuperarContraseniaComponent } from './components/recuperar-contrasenia/recuperar-contrasenia.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginGuard } from './guards/permiso.service';
import { MapaService } from './servicios/mapa.service';
import { RolesGuard } from './guards/roles.service';

export const routes: Routes = [
{ path: 'chat', component: ChatComponent},
{ path: 'crear-lugar', component: CrearLugarComponent, canActivate: [RolesGuard], data: { expectedRole: ["CLIENTE"] } },
{ path: 'crear-oferta', component: CrearOfertaComponent, canActivate: [RolesGuard], data: { expectedRole: ["CLIENTE"] } },
{ path: 'detalle-lugar', component: DetalleLugarComponent, canActivate: [RolesGuard], data: { expectedRole: ["CLIENTE"] } },
{ path: 'favorito', component: FavoritoComponent, canActivate: [RolesGuard], data: { expectedRole: ["CLIENTE"] } },
{ path: '', component: InicioComponent },
{ path: 'inicio-admin', component: InicioAdminComponent, canActivate: [RolesGuard], data: { expectedRole: ["MODERADOR"] } },
{ path: 'inicio-cliente', component: InicioClienteComponent, canActivate: [RolesGuard], data: { expectedRole: ["CLIENTE"] } },
{ path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
{ path: 'lugares-aceptados', component: LugaresAceptadosComponent, canActivate: [RolesGuard], data: { expectedRole: ["MODERADOR"] } },
{ path: 'lugares-pendientes', component: LugaresPendientesComponent, canActivate: [RolesGuard], data: { expectedRole: ["MODERADOR"] } },
{ path: 'lugares-rechazados', component: LugaresRechazadosComponent, canActivate: [RolesGuard], data: { expectedRole: ["MODERADOR"] } },
{ path: 'mapa', component: MapaService},
{ path: 'mis-lugares', component: MisLugaresComponent, canActivate: [RolesGuard], data: { expectedRole: ["CLIENTE"] } },
{ path: 'ofertas', component: OfertasComponent, canActivate: [RolesGuard], data: { expectedRole: ["CLIENTE"] } },
{ path: 'perfil', component: PerfilComponent, canActivate: [RolesGuard], data: { expectedRole: ["CLIENTE"] } },
{ path: 'recuperar-contrasenia', component: RecuperarContraseniaComponent, canActivate: [RolesGuard], data: { expectedRole: ["CLIENTE"] } },
{ path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
{ path: "**", pathMatch: "full", redirectTo: "" }
];