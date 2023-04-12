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
  

  public saveProductCart(product: Product, cantidad: number){
    const cartProduct = {
      product : product,
      cantidad: cantidad
    }
    this.cart.push(cartProduct);
  }

}
