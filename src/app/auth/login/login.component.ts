import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonasService } from '../../services/personas.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  identificacion: string = '';
  contrasenna: string = '';
  mensaje: string = '';

  constructor(private personasService: PersonasService, private router: Router) {}

  iniciarSesion() {
    this.personasService.login(this.identificacion, this.contrasenna).subscribe(
      (res: any) => {
        console.log(res);
        this.mensaje = res.mensaje || res.error || 'Inicio de sesión exitoso';
        console.log(res);
      },
      (error: any) => {
        this.mensaje = error.message || 'Error al iniciar sesión';
        console.error(error);
      }
    );
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }
}
