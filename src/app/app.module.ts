import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRountingModule } from './app-rounting.module';
import { CursosModule } from './cursos/cursos.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component';
import { AlumnosComponent } from './core/components/alumnos/alumnos.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NoEncontradoComponent,
    AlumnosComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRountingModule,
    CursosModule,
    MaterialModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
