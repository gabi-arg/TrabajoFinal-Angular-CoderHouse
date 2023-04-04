import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/curso.service';
import { Observable } from 'rxjs';
import { Profesor } from 'src/app/models/profesor';
import { ProfesorService } from 'src/app/core/services/profesor.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-curso-editar',
  templateUrl: './curso-editar.component.html',
  styleUrls: ['./curso-editar.component.css']
})
export class CursoEditarComponent implements OnInit{
formulario!: FormGroup;
profesores$!: Observable<Profesor[]>


  constructor(
    private cursoService: CursosService,
    private activatedRoute:ActivatedRoute,
    private router: Router,
    private profesores: ProfesorService,
    private dialogRef: MatDialogRef<CursoEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public curso: Curso
  ){}
  ngOnInit(): void{
    this.profesores$ = this.profesores.obtenerProfesores();
    this.activatedRoute.paramMap.subscribe((parametros)=>{
      this.formulario = new FormGroup({
        nombre:  new FormControl(this.curso.nombre),
        comision: new FormControl(this.curso.comision) ,
        profesor: new FormControl(this.curso.profesor) ,
        precio: new FormControl(this.curso.precio) ,
        fechaInicio: new FormControl(this.curso.fechaInicio),
        fechaFin: new FormControl (this.curso.fechaFin),
        inscripcionAbierta: new FormControl(this.curso.inscripcionAbierta),

      })
    })

  }
  editarCurso(){
    let curso: Curso = {
      id: this.curso.id,
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      precio: this.formulario.value.precio,
      profesor: this.formulario.value.profesor
    }

    this.cursoService.editarCurso(curso).subscribe((curso: Curso)=>{
      this.dialogRef.close(curso);

    });
  }
}
