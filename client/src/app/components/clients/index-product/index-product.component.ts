import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/CartProduct';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { PaymentService } from 'src/app/services/payment.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-index-product',
  templateUrl: './index-product.component.html',
  styleUrls: ['./index-product.component.css']
})
export class IndexProductComponent implements OnInit {

  products: any = [];

  valores: any = [];

  productsToCart!: CartProduct[];

  precio_producto: number = 0;

  total_pagar: number = 0;

  cantidad: number = 1;

  public page!: number;




  constructor(private productService: ProductService, private cartService: CartService, private paymentService: PaymentService) { }

  ngOnInit() {
    this.getProducts();
    this.productsToCart = this.cartService.getProductCart();
  }

  getProducts() {
    this.productService.allProductsActivate().subscribe(
      res => {
        this.products = res;
      },
      err => {
        console.log(err)
      }
    );
  }

  payment() {
    this.paymentService.createPayment().subscribe(
      res => {
        this.valores = res
        window.location.href = this.valores.init_point
      },
      err => {
        console.log(err)
      }
    );
  }


  saveProductCart(product: Product) {
    this.cartService.saveProductCart(product);
    this.total_pagar = this.total_pagar + this.cartService.getTotalValue();

  }

  deleteProductCart(id: number) {
    this.cartService.deleteProductCart(id);
    if (this.cartService.cart.length < 1) {
      this.total_pagar = 0;
    }
    this.total_pagar = this.total_pagar - this.cartService.getTotalValue();
  }

}