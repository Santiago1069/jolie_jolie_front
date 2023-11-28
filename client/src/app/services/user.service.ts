import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import {environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL =environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get(`${this.API_URL}/users`)
  }

  getOneUser(id: string):  Observable<User>{
    return this.http.get<User>(`${this.API_URL}/user/${id}`)
  }

  createUser(user: User): Observable<any>{
    return this.http.post(`${this.API_URL}/user`, user)
  }

  deleteUser( id: string){
    return this.http.delete(`${this.API_URL}/user/${id}`)
  }

  updateUser(id: Number | string, updateUser: User) {
    return this.http.put(`${this.API_URL}/user/${id}`, updateUser)
  }


  getProfiles(){
    return this.http.get(`${this.API_URL}/profiles`)
  }

  getTipeDocument(){
    return this.http.get(`${this.API_URL}/documents`)
  }













}
