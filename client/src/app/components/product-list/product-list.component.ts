import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'; 'sweetalert2';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(
      res => {
        this.products = res;
        console.log(res);
      },
      err => {
        console.log(err)
      }
    );
  }


  deleteProduct(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Una vez eliminado, no podrá recuperar este producto",
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
          'El producto se ha eliminado correctamente',
          'success'
        )
        this.productService.deleteProduct(id).subscribe(
          res => {
            this.getProducts();
            console.log(res);
          },
          err => {
            console.log(err)
          }
        )
      }else if (result.isDenied) {
        Swal.fire('El producto no se elimino', '', 'info')
      }
    })
  }



}
