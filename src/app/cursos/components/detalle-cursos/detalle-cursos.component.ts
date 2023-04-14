import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Curso } from 'src/app/models/curso';


@Component({
  selector: 'app-detalle-cursos',
  templateUrl: './detalle-cursos.component.html',
  styleUrls: ['./detalle-cursos.component.css']
})
export class DetalleCursosComponent implements OnInit {
  curso!: Curso;

  constructor(
    private activatedRoute: ActivatedRoute,
  ){}


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => this.curso = {
      id:(parametros.get('id') || ''),
      nombre:(parametros.get('nombre') || ''),
      comision:(parametros.get('comision') || ''),
      profesor:(parametros.get('profesor') || ''),
      fechaInicio:new Date(parametros.get('fechaInicio') || ''),
      fechaFin: new Date(parametros.get('fechaFin') || ''),
      inscripcionAbierta:(parametros.get('inscripcionAbierta') === 'true')
    })
  }
}
