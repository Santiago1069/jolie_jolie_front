import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


import { User } from '../models/User';
import { Login } from '../models/login';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {  }

  createUser(user: User): Observable<any>{
    return this.http.post(`${this.API_URL}/newUser`, user);
  }

  login(login: Login):Observable<String>{
    return this.http.post<String>(`${this.API_URL}/loginUser`, login);
  }

}
