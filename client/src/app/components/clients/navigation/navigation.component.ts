import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'comprador-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class CompradorNavigationComponent implements OnInit {

  productsToCart: any = [];

  users: any = [];

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.getUser();

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

  cerrarSesion(){
    Swal.fire(
      '¡Hasta pronto!',
      'Cierre de sesion exitoso!!',
      'warning'
    )
    localStorage.removeItem('token');
    this.router.navigate(['/loginUser'])
  }

  saveProductCart(product: Product, cantidad: number){


  }

}
