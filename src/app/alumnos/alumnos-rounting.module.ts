import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';



const routes: Routes = [
  {
    path:'',
      children:[
    {path:'tabla', component: TablaAlumnosComponent},


  ]}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRountingModule { }

