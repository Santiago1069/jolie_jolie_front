import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Product } from '../models/Product'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(`${this.API_URL}/products`);
  }

  getOneProduct(id: Number): Observable<Product> {
    return this.http.get<Product>(`${this.API_URL}/ManagementProduct/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${this.API_URL}/ManagementProduct`, product);
  }

  deleteProduct(id: Number) {
    return this.http.delete(`${this.API_URL}/ManagementProduct/${id}`);
  }

  updateProduct(id: Number | string, updateProduct: Product) {
    return this.http.put(`${this.API_URL}/ManagementProduct/${id}`, updateProduct)
  }
}
