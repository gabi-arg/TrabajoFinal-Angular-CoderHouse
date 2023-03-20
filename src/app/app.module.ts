import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRountingModule } from './app-rounting.module';
import { CursosModule } from './cursos/cursos.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component';
import { AlumnosModule } from './alumnos/alumnos.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NoEncontradoComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRountingModule,
    CursosModule,
    AlumnosModule,
    MaterialModule,
    ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
