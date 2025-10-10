import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductosServicio } from '../../services/productos-servicio';
import Producto from '../../models/producto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

constructor(
    public Service : ProductosServicio,
    private router : Router){}

  ngOnInit(): void {
    this.get()
  }

  get(){
    this.Service.getProductos().subscribe({
      next: (data) => { this.Service.productos = data},
      error: (e) => { console.log(e)}
    })
  }

  delete(id : string){
    this.Service.deleteProducto(id).subscribe({
      next: (data) => {this.get()},
      error: (error) => { console.log(error) }
    })
  }

}
