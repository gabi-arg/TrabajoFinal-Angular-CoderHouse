import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Alumno } from 'src/app/models/alumnos';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit {
    dataSource!: MatTableDataSource<Alumno>;
    columnas: string[] = ['nombre', 'cursoRealizado', 'correo', 'pais', 'fechaNac']
    suscripcion!:Subscription;
    constructor( private alumnoService: AlumnosService){}



    ngOnInit(): void {
      this.dataSource =  new MatTableDataSource<Alumno>();
      this.suscripcion = this.alumnoService.obtenerAlumno().subscribe((alumnos: Alumno[])=>{
        this.dataSource.data = alumnos;



      })
  };



      };



