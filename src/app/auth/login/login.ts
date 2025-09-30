import { Component } from '@angular/core';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html'
})
export class LoginComponent {
  identificacion = '';
  contrasenna = '';
  mensaje = '';

  constructor(private personasService: PersonasService) {}

  iniciarSesion() {
    this.personasService.login(this.identificacion, this.contrasenna)
      .subscribe(res => {
        this.mensaje = res.mensaje || res.error;
      });
  }
}