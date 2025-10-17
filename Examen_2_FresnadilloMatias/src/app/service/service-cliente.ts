import { Injectable } from '@angular/core';
import Cliente from '../model/Cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceCliente {
  
  readonly API_URL = "http://localhost:3000/clientes"

  productos : Cliente[]

  constructor(private http: HttpClient){
    this.productos = []
  }

  getClientes(){
    return this.http.get<Cliente[]>(this.API_URL);
  }

  getCliente(id : string){
    return this.http.get<Cliente>(`${this.API_URL}/${id}`);
  }

  postCliente(c : Cliente){
    return this.http.post<Cliente>(this.API_URL, c);
  }

  deleteCliente(id : string){
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  updateCliente(c: Cliente) {
    return this.http.put<Cliente>(`${this.API_URL}/${c.id}`, c);
  }

}


