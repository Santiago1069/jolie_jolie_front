import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-index-product',
  templateUrl: './index-product.component.html',
  styleUrls: ['./index-product.component.css']
})
export class IndexProductComponent implements OnInit {


  products: any = [];

  productsToCart: any = [];
  
  public page!: number;


  constructor(private productService: ProductService, private cartService: CartService) { }

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


  saveProductCart(product: Product){
    console.log(product)

  }

  deleteProductCart(id: number){
    console.log(id)
  }



}