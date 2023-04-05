import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'; 'sweetalert2';

import { Categoria } from 'src/app/models/Categoria';
import { Product } from 'src/app/models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

   product: Product = {
    id_producto: 0,
    nombre_producto: '',
    color: '',
    precio: 0 ,
    imagen: '',
    descripcion_producto: '',
    cantidad: 0,
    estado: 1,
    id_categoria: 1
  }



  edit: boolean = false;

  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOneProduct();
  }

  getOneProduct(){
    const params = this.activatedRoute.snapshot.params;
    if(params["id"]){
      this.productService.getOneProduct(params['id']).subscribe(
        res => {
          this.product = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
  }


  saveProduct(){
    this.productService.createProduct(this.product).subscribe(
      res => {
        console.log(res);
        Swal.fire(
          'Guardado',
          'El producto ha sido guardado correctamente!',
          'success'
        )
        this.router.navigate(['/products']);
      },
      err => console.log(err)
    )
  }

  updateProduct(){
    this.productService.updateProduct(this.product.id_producto, this.product).subscribe(
      res => {
        this.router.navigate(['/products']);
        Swal.fire(
          'Actualizado',
          'El producto ha sido actualizado correctamente!',
          'success'
        )
      },
      err => console.log(err)
    )
  }

}
