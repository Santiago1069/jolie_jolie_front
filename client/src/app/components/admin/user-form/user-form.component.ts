import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';


import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = {
    identificacion: '',
    nombre: '',
    correo: '',
    password: '',
    celular: 0,
    fk_id_perfiles: 0,
    fk_id_tipo_documento: 0
  }

  edit: boolean = false;

  profiles: any = [];

  documents: any = [];

  constructor(private userServices: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.validacionDeCampos();
    this.getOneUser();
    this.getProfiles();
    this.getTipeDocument();
  }


  getOneUser(){
    const params = this.activatedRoute.snapshot.params;
    if(params["id"]){
      this.userServices.getOneUser(params['id']).subscribe(
        res => {
          console.log('this.user')
          console.log(this.user)
          this.user = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
  }



  createUser() {
    if (this.user.identificacion == '' || this.user.nombre == '' || this.user.correo == '' || this.user.password == '' || this.user.celular == 0) {
      return
    }

    this.userServices.createUser(this.user).subscribe(
      res => {
        Swal.fire({
          title: 'Muy bien',
          text: "El usuario '" + this.user.nombre + "' ha sido creado correctamente!",
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Continuar'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/users']);
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
            this.router.navigate(['/user/add']);
          }
        })
      }
    )
  }


  updateProduct(){
    this.userServices.updateUser(this.user.identificacion, this.user).subscribe(
      res => {
        this.router.navigate(['/users']);
        Swal.fire(
          'Actualizado',
          'El usuario ha sido actualizado correctamente!',
          'success'
        )
      },
      err => console.log(err)
    )
  }


  getProfiles(){
    this.userServices.getProfiles().subscribe(
      res => {
        this.profiles = res;
      },
      err => {
        console.log(err)
      }
    )
  }


  getTipeDocument(){
    this.userServices.getTipeDocument().subscribe(
      res => {
        this.documents = res;
      },
      err => {
        console.log(err)
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
