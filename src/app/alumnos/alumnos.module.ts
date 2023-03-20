import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { AlumnosRountingModule } from './alumnos-rounting.module';



@NgModule({
  declarations: [
    ListaAlumnosComponent,
  ],
  imports: [
    CommonModule,
    AlumnosRountingModule
  ]
})
export class AlumnosModule { }
