import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { TablaAlumnosComponent } from './components/lista-alumnos/tabla-alumnos.component';





@NgModule({
  declarations: [
    TablaAlumnosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule

  ]
})
export class AlumnosModule { }
