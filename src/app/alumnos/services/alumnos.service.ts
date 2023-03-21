import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumnos: Alumno[] = [
    {
      nombre:'Oscar',
      cursoRealizando: 'Angular',
      correo: 'oscarbenavidez@gmail.com',
      pais: 'Argentina',
      fechaNac: new Date (1984, 8, 24)
    },
    {
      nombre:'Pedro',
      cursoRealizando: 'Vue',
      correo: 'pedropascal@gmail.com',
      pais: 'Chile',
      fechaNac: new Date (1994, 5, 14)
    },
    {
      nombre:'Lucia',
      cursoRealizando: 'React Js',
      correo: 'luciaduran@gmail.com',
      pais: 'Argentina',
      fechaNac: new Date (1999, 6, 19)
    },
    {
      nombre:'Mariela',
      cursoRealizando: 'Vue',
      correo: 'marielaperez@gmail.com',
      pais: 'Uruguay',
      fechaNac: new Date (1996, 2, 22)
  }
  ]

  private alumnos$: BehaviorSubject<Alumno[]>;
  constructor() {
  this.alumnos$ = new BehaviorSubject<Alumno[]>(this.alumnos);
  }

  obtenerAlumno(): Observable<Alumno[]>{
  return this.alumnos$.asObservable();
}
}
