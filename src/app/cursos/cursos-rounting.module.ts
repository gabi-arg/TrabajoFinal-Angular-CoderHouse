import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { SesionGuard } from '../core/guards/sesion.guard';
import { CursoEditarComponent } from './components/curso-editar/curso-editar.component';
import { CursosAgregarComponent } from './components/cursos-agregar/cursos-agregar.component';
import { CursosCardComponent } from './components/cursos-card/cursos-card.component';



const routes: Routes = [
  {
    path:'',
      children:[
    {path:'editar', component: CursoEditarComponent},
    {path:'card', component: CursosCardComponent },
    {path:'agregar', component: CursosAgregarComponent},
  ]}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRountingModule { }
