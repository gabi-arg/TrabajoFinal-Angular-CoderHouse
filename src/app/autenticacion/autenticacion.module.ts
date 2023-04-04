import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuntenticacionRoutingModule } from './autenticacion-routing.module';
import { AutenticacionInicioComponent } from './autenticacion-inicio/autenticacion-inicio.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AutenticacionInicioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuntenticacionRoutingModule,
    SharedModule,

  ]
})
export class AutenticacionModule { }
