import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarCursosComponent } from './components/agregar-cursos/agregar-cursos.component';
import { CursosCardComponent } from './components/cursos-card/cursos-card.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';


const routes: Routes = [
  {path:'cursos', children:[
    { path:'editar', component: EditarCursoComponent},
    { path: 'agregar', component: AgregarCursosComponent},
    { path: 'card', component: CursosCardComponent},


  ]}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRountingModule { }
