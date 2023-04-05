import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

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

}
