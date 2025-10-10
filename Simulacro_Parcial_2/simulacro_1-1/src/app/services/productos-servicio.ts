import { Injectable } from '@angular/core';
import Producto from '../models/producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosServicio {
  readonly API_URL = "http://localhost:3000/productos"
  
  productos : Producto[]
  
  constructor(private http: HttpClient){
    this.productos = []
  }
  
  getProductos(){
    return this.http.get<Producto[]>(this.API_URL);
  }

}

