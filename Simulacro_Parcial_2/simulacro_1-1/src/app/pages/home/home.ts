import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { ProductosServicio } from '../../services/productos-servicio';
import Producto from '../../models/producto';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{

  constructor(
    public service : ProductosServicio,
    private router : Router){}

  ngOnInit(): void {
    this.get()
  }

  get(){
    this.service.getProductos().subscribe({
      next: (data) => { this.service.productos = data},
      error: (e) => { console.log(e)}
    })
  }

}

