import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/curso.service';


@Component({
  selector: 'app-cursos-card',
  templateUrl: './cursos-card.component.html',
  styleUrls: ['./cursos-card.component.css']
})
export class CursosCardComponent implements OnInit{
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>

  constructor(
    private cursoService: CursosService,

  ){}
  ngOnInit() {
  this.cursos$ = this.cursoService.obtenerCursos();
  }
}
