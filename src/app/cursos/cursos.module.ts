import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosCardComponent } from './components/cursos-card/cursos-card.component';
import { AgregarCursosComponent } from './components/agregar-cursos/agregar-cursos.component';
import { MaterialModule } from '../material.module';
import { CursosRountingModule } from './cursos-rounting.module';
import { CursosService } from './services/services.service';
;



@NgModule({
  declarations: [

    AgregarCursosComponent,
    CursosCardComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    CursosRountingModule

  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
