import { Component, Input, OnInit } from '@angular/core';
import { CursosService } from '../../services/curso.service';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';


@Component({
  selector: 'app-detalle-cursos',
  templateUrl: './detalle-cursos.component.html',
  styleUrls: ['./detalle-cursos.component.css']
})
export class DetalleCursosComponent implements OnInit {
  cursos!: Curso[];
  sesion$!: Observable<Sesion>;
  cursos$!: Observable<Curso[]>
  @Input('appBooleanoEstilo') inscripcionAbierta!: boolean;

constructor(
  private cursoService: CursosService,
    private router: Router,
    private sesion: SesionService,
    private dialog: MatDialog,

){}
ngOnInit(): void{

  this.sesion$ = this.sesion.obtenerSesion();
}
}
