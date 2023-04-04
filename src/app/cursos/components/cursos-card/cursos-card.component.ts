import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Curso } from 'src/app/models/curso';
import { Sesion } from 'src/app/models/sesion';
import { CursosService } from '../../services/curso.service';
import { MatDialog } from '@angular/material/dialog';
import { CursoEditarComponent } from '../curso-editar/curso-editar.component';


@Component({
  selector: 'app-cursos-card',
  templateUrl: './cursos-card.component.html',
  styleUrls: ['./cursos-card.component.css']
})
export class CursosCardComponent implements OnInit{

  cursos!: Curso[];
  sesion$!: Observable<Sesion>;
  cursos$!: Observable<Curso[]>
  @Input('appBooleanoEstilo') inscripcionAbierta!: boolean;

  constructor(
    private cursoService: CursosService,
    private router: Router,
    private sesion: SesionService,
    private dialog: MatDialog

  ){}
  ngOnInit(): void {

    this.cursos$ = this.cursoService.obtenerCursos();
    this.sesion$ = this.sesion.obtenerSesion();
  }
  eliminarCurso(curso:Curso){
    this.cursoService.eliminarCurso(curso).subscribe((curso: Curso) =>{
      alert(`${curso.nombre} eliminado`);
      this.cursos$ = this.cursoService.obtenerCursos();
    });
  }
  editarCursoDialog(curso: Curso){
    this.dialog.open(CursoEditarComponent,{
      data: curso
    }).afterClosed().subscribe((curso:Curso)=>{
      alert(`El curso ${curso.nombre} ha sido modificado`);
      this.cursos$ = this.cursoService.obtenerCursos();
    })
  }
}
