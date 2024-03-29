import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createMensajes(asunto:string, mensaje:string) {
    return this.http.post(`${this.API_URL}/contact`, {asunto, mensaje});
  }

  getMensajes(){
    return this.http.get(`${this.API_URL}/contact`);
  }
}
