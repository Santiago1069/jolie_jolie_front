import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'; 'sweetalert2';

import { Product } from 'src/app/models/Product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: any = {
    id_producto: 0,
    nombre_producto: '',
    color: '',
    precio: 0,
    imagen: '',
    descripcion_producto: '',
    cantidad: 0,
    estado: 0,
    id_categoria: 0,
    descripcion_categoria: ''
  }

  categories: any = [];

  edit: boolean = false;

  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.validacionDeCampos();
    this.getCategories();
    this.getOneProduct();
   
  }

  getOneProduct() {
    const params = this.activatedRoute.snapshot.params;
    if (params["id"]) {
      this.productService.getOneProduct(params['id']).subscribe(
        res => {
          this.product = res;
          console.log('this.product');
          console.log(this.product.descripcion_categoria);

          this.edit = true;
        },
        err => console.log(err)
      )
    }
  }

  getCategories() {
    this.productService.getCategories().subscribe(
      res => {
        this.categories = res;
      },
      err => {
        console.log(err)
      }
    );
  }


  saveProduct() {

    if (this.product.nombre_producto == '' || this.product.color == '' || this.product.imagen == '' || this.product.id_categoria == 0 || this.product.descripcion_producto == '' || this.product.estado == 0) {
      return
    }


    this.productService.createProduct(this.product).subscribe(
      res => {
        console.log(res);
        Swal.fire(
          'Guardado',
          'El producto ha sido guardado correctamente!',
          'success'
        )
        this.router.navigate(['/admin/products']);
      },
      err => console.log(err)
    )
  }

  updateProduct() {
    this.productService.updateProduct(this.product.id_producto, this.product).subscribe(
      res => {
        this.router.navigate(['/admin/products']);
        Swal.fire(
          'Actualizado',
          'El producto ha sido actualizado correctamente!',
          'success'
        )
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
