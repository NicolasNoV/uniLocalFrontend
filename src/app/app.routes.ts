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
import { MapaComponent } from './components/mapa/mapa.component';
import { MisLugaresComponent } from './components/mis-lugares/mis-lugares.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RecuperarContraseniaComponent } from './components/recuperar-contrasenia/recuperar-contrasenia.component';
import { RegistroComponent } from './components/registro/registro.component';

export const routes: Routes = [
{ path: 'chat', component: ChatComponent},
{ path: 'crear-lugar', component: CrearLugarComponent},
{ path: 'crear-oferta', component: CrearOfertaComponent},
{ path: 'detalle-lugar', component: DetalleLugarComponent},
{ path: 'favorito', component: FavoritoComponent},
{ path: '', component: InicioComponent },
{ path: 'inicio-admin', component: InicioAdminComponent},
{ path: 'inicio-cliente', component: InicioClienteComponent},
{ path: 'login', component: LoginComponent },
{ path: 'lugares-aceptados', component: LugaresAceptadosComponent},
{ path: 'lugares-pendientes', component: LugaresPendientesComponent},
{ path: 'lugares-rechazados', component: LugaresRechazadosComponent},
{ path: 'mapa', component: MapaComponent},
{ path: 'mis-lugares', component: MisLugaresComponent},
{ path: 'ofertas', component: OfertasComponent},
{ path: 'perfil', component: PerfilComponent},
{ path: 'recuperar-contrasenia', component: RecuperarContraseniaComponent},
{ path: 'registro', component: RegistroComponent },
{ path: "**", pathMatch: "full", redirectTo: "" }
];