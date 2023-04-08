import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';




import { User } from 'src/app/models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/models/login';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  user: User = {
    identificacion: '',
    nombre: '',
    correo: '',
    password: '',
    celular: 0,
    id_perfiles_fk: 2,
    id_tipo_documento_fk: 1
  }

  loginObjeto: Login = {
    correo: '',
    password: ''
  }


  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.validacionDeCampos();

  }


  createUser() {
    if (this.user.identificacion == '' || this.user.nombre == '' || this.user.correo == '' || this.user.password == '' || this.user.celular == 0) {
      return
    }

    this.authenticationService.createUser(this.user).subscribe(
      res => {
        Swal.fire({
          title: 'Muy bien',
          text: "El usuario '" + this.user.nombre + "' ha sido registrado correctamente!",
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Continuar'
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        })
      },
      (event: HttpErrorResponse) => {
        Swal.fire({
          title: 'Error',
          text: event.error.msg,
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Continuar'
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        })
      }
    )
  }




  login() {
    if (this.loginObjeto.correo == '' || this.loginObjeto.password == '') {
      return
    }


    this.authenticationService.login(this.loginObjeto).subscribe({
      next: (token) => {
        Swal.fire(
          'Muy bien',
          'Inicio de sesion exitoso!!',
          'success'
        )
        this.router.navigate(['/products']);
        localStorage.setItem('token', token as string)
      },
      error: (e: HttpErrorResponse) => {
        if (e.error.msg) {
          Swal.fire(
            'Error',
            e.error.msg,
            'error'
          )
        } else {
          Swal.fire(
            'Error',
            'Error con el servidor comuniquese con el administrador ',
            'error'
          )
        }

      }
    }
    )

  }


  validacionDeCampos() {
    (() => {

      'use strict'
      const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll('.needs-validation')

      Array.from(forms).forEach((form: HTMLFormElement) => {
        form.addEventListener('submit', (event: Event) => {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
    })()
  }

}
