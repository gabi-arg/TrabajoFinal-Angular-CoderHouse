import { Profesor } from "./profesor";

export interface Curso{
  id: string,
  nombre: string,
  comision:string,
  profesor: Profesor,
  fechaInicio: Date,
  fechaFin: Date,
  inscripcionAbierta: boolean,
  precio: string
}
