import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from './models/sesion';
import { Observable } from 'rxjs';
import { SesionService } from './core/services/sesion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sesion$!: Observable<Sesion>;


constructor(
  private router: Router,
  private sesion: SesionService

){}
  ngOnInit(): void {
    this.sesion$ = this.sesion.obtenerSesion();
  }

  logout(){
    let sesionLogout: Sesion = {
      sesionActiva:false
    };
    this.sesion.logout(sesionLogout);
    this.router.navigate(['/auth/login'])
  }
}
