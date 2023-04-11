import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { AlumnosService } from './services/alumnos.service';
import { AlumnosRountingModule } from './alumnos-rounting.module';
import { FechaPipe } from './pipes/fecha.pipe';
import { EditarAlumnosComponent } from './components/editar-alumnos/editar-alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarAlumnosComponent } from './components/agregar-alumnos/agregar-alumnos.component';





@NgModule({
  declarations: [
    TablaAlumnosComponent,
    EditarAlumnosComponent,
    AgregarAlumnosComponent,
    FechaPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AlumnosRountingModule,
    ReactiveFormsModule,

  ],
  providers:[
    AlumnosService
  ]
})
export class AlumnosModule { }
