import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/services/mensajes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mensaje: any = {
    asunto: '',
    mensaje: ''
  }

  constructor(private mensajesService: MensajesService, private router: Router) { }

  ngOnInit(): void {
    this.validacionDeCampos();
  }

  enviarMensaje(){

    console.log('clic');
    

    if(this.mensaje.asunto == '' || this.mensaje.mensaje == ''){
      return
    }

    this.mensajesService.createMensajes(this.mensaje.asunto, this.mensaje.mensaje).subscribe(
      res => {
        Swal.fire(
          'Guardado',
          'El mensaje ha sido enviado correctamente, pronto se comunicaran mediante el correo electronico que tiene registrado!',
          'success'
        )
        this.router.navigate(['/index-product']);
      },
      err => console.log(err)
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
