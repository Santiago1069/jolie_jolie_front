import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import Swal from 'sweetalert2'; 'sweetalert2';


import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  searchText: any;

  public page!: number;

  users: any = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }



  getUsers(){
    this.userService.getAllUsers().subscribe(
      res => {
        this.users = res;
      },
      err => {
        console.log(err)
      }
    )
  }


  deleteUser(id: string) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Una vez eliminado, no podrá recuperar este usuario",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'El usuario se ha eliminado correctamente',
          'success'
        )
        this.userService.deleteUser(id).subscribe(
          res => {
            this.getUsers();
            console.log(res);
          },
          err => {
            console.log(err)
          }
        )
      }else if (result.isDenied) {
        Swal.fire('El usuario no se elimino', '', 'info')
      }
    })
  }
  

}
