import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonasService } from '../../services/personas.service';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  identificacion: string = '';
  contrasenna: string = '';
  mensaje: string = '';

  constructor(private personasService: PersonasService) {}

  iniciarSesion() {
    this.personasService.login(this.identificacion, this.contrasenna).subscribe(
      (res: any) => {
        this.mensaje = res.mensaje || res.error || 'Inicio de sesión exitoso';
        console.log(res);
      },
      (error: any) => {
        this.mensaje = error.message || 'Error al iniciar sesión';
        console.error(error);
      }
    );
  }
}
