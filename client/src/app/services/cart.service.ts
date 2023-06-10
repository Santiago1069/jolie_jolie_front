import { Injectable } from '@angular/core';
import { CartProduct } from '../models/CartProduct';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartProduct[]

  constructor() {
    this.cart = Array();
  }


  saveProductCart(product: Product) {
    const cartProduct = {
      product: product
    }
    this.cart.push(cartProduct);
  }

  getProductCart() {
    return this.cart;
  }

  deleteProductCart(id_producto: number) {
    const cartProductToDeleteIndex = this.searchProductIndex(id_producto);
    this.cart.splice(cartProductToDeleteIndex, 1);
  }

  searchProductIndex(id_producto: number): number {
    for (let i = 0; i < this.cart.length; i++) {
      if(id_producto === this.cart[i].product.id_producto){
        return i;
      }
    }

    throw new Error("product not found");
  }

  getTotalValue(): number {
    var total_pagar = 0;
    for (let i = 0; i < this.cart.length; i++) {
      
      total_pagar = total_pagar + this.cart[i].product.precio
      return total_pagar;
    }
    throw new Error("total no encontrado");
  }

  totalProducts(){
    return this.cart.length
  }
  
}
