import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'admin-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {

  users: any = [];


  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    Swal.fire(
      '¡Hasta pronto!',
      'Cierre de sesion exitoso!!',
      'warning'
    )
    localStorage.removeItem('token');
    this.router.navigate(['/loginUser'])
  }


  getUser(){
    this.authenticationService.profile().subscribe(
      res => {
        this.users = res;
      },
      err => {
        console.log(err)
      }
    )
  }

}
