import { Profesor } from "./profesor";

export interface Curso{
  nombre: string,
  comision:string,
  profesor: Profesor,
  fechaInicio: Date,
  fechaFin: Date,
  inscripcionAbierta: boolean
}
