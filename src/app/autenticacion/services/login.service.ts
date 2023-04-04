import { Injectable } from '@angular/core';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private sesion: SesionService
  ) { }
  login(usuario: Usuario){
    let s: Sesion = {
      sesionActiva: true,
      usuarioActivo: usuario
    };
    this.sesion.crearSesion(s);
  }
}
