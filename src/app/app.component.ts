import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from './models/sesion';
import { Observable } from 'rxjs';
import { SesionService } from './core/services/sesion.service';

import { Curso } from './models/curso';
import { CursosService } from './cursos/services/curso.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sesion$!: Observable<Sesion>;


  constructor(
    private router: Router,
    private sesion: SesionService,
    private cursoService: CursosService,

){}
  ngOnInit(): void {
    this.sesion$ = this.sesion.obtenerSesion();
    /* this.store.dispatch(cargarCursos())
    this.cursoService.obtenerCursos().subscribe((cursos: Curso[])=>{
      this.store.dispatch(cursosCargados({cursos: cursos}))
    }); */

  }

  logout(){
    let sesionLogout: Sesion = {
      sesionActiva:false
    };
    this.sesion.logout(sesionLogout);
    this.router.navigate(['/auth/login'])
  }
  inicio(){
    this.router.navigate(['inicio'])

  }
}
