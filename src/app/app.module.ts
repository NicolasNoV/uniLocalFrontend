// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  bootstrap: [] // No es necesario declarar componentes aquí ya que están en `app.config.ts`
})
export class AppModule { }
