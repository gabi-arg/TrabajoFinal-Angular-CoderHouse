import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosComponent } from './core/components/alumnos/alumnos.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component';




const routes: Routes = [

  {path: 'alumnos', component: AlumnosComponent},
  {path:'', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: '**', component: NoEncontradoComponent}
]

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRountingModule { }
