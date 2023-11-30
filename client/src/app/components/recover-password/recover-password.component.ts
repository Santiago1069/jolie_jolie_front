import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  password_actual: string = '';
  password_nueva: string = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.validacionDeCampos();
  }
  
  cambiarContrasenia(){

    if (this.password_actual == '' && this.password_nueva == '') {
      return
    }

    this.authenticationService.cambiarPassword(this.password_actual, this.password_nueva).subscribe(
      res => {
        Swal.fire({
          title: 'Contraseña actualizada',
          text: "Cambio de contraseña exitosa",
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Continuar'
        }).then((result) => {
          if (result.isConfirmed) {
            if(res.id_perfiles_fk == '1'){
              this.router.navigate(['/admin/products']);
            }else{
              this.router.navigate(['/index-product']);
            }
            
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
