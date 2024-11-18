// app.config.ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.routes';
import { usuarioInterceptor } from './interceptor/usuario.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([usuarioInterceptor])),
    importProvidersFrom(FormsModule, ReactiveFormsModule) // Solo módulos y configuraciones, no componentes
  ]
};

