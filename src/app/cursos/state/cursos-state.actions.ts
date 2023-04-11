import { createAction, props } from '@ngrx/store';
import { Curso } from '../../models/curso';

export const loadCursosState = createAction(
  '[CursosState] Load CursosStates'
);


export const cursosCargados = createAction(
  '[CursosState] Cursos cargados',
  props<{cursos: Curso[]}>()
)

