import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: any = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.validacionDeCampos()
  }

  validateEmail() {

    if (this.email == '') {
      return
    }

    this.authenticationService.validateEmail(this.email).subscribe(
      res => {
        Swal.fire({
          title: 'Contraseña actualizada',
          text: "Cambio de contraseña exitosa, revisa el correo '" + this.email + "' para que mires tu nueva contraseña",
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Continuar'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/loginUser']);
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
