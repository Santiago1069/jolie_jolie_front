import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Login } from 'src/app/models/login';
import { environment } from 'src/environments/environment';


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
    id_perfiles_fk: '2',
    id_tipo_documento_fk: '0'
  }
  correo: string = "";

  loginObjeto: Login = {
    correo: '',
    password: ''
  }

  documents: any = [];

  users: any = [];


  constructor(private authenticationService: AuthenticationService, private router: Router, private route: ActivatedRoute, private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.recuperarDatos();
    this.validacionDeCampos();
    this.getTipeDocument();
  }
  recuperarDatos(): void {
    const datosRecuperados = JSON.parse(this.cookieService.get('misDatos') || '{}');
    if (datosRecuperados['user'] != undefined) {
      this.loginObjeto.correo = datosRecuperados['user']
      this.loginObjeto.password = datosRecuperados['pwd']
      this.login();
    }
    this.cookieService.delete('misDatos');
  }

  getTipeDocument() {
    this.authenticationService.getTipeDocument().subscribe(
      res => {
        this.documents = res;
        console.log(this.documents);
      },
      err => {
        console.log(err)
      }
    )
  }


  createUser() {

    var checkbox = document.getElementById("check") as HTMLInputElement;

    if (this.user.identificacion == '' || this.user.nombre == '' || this.user.correo == '' || this.user.password == '' || this.user.celular == 0) {
      return
    }

    if (!checkbox.checked) {
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

  getUser() {
    this.authenticationService.profile().subscribe(
      res => {
        this.users = res;
        if (this.users.id_perfiles_fk === 1) {
          this.router.navigate(['/admin/products']);
        } else {
          window.location.href = environment.clientUrl
        }

      },
      err => {
        console.log(err)
      }
    )
  }

  login() {
    if (this.loginObjeto.correo == '' || this.loginObjeto.password == '') {
      return
    }
    this.authenticationService.login(this.loginObjeto).subscribe({
      next: (token) => {
        localStorage.setItem('tocken', token as string)
        this.getUser();
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
