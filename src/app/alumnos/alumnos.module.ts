import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { AlumnosService } from './services/alumnos.service';
import { AlumnosRountingModule } from './alumnos-rounting.module';





@NgModule({
  declarations: [
    TablaAlumnosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AlumnosRountingModule

  ],
  providers:[
    AlumnosService
  ]
})
export class AlumnosModule { }
