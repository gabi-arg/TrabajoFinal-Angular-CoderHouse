import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';



const routes: Routes = [
  {path:'alumnos', children:[
    {path:'lista-alumnos', component: ListaAlumnosComponent}


  ]}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRountingModule { }
