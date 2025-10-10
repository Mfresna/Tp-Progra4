import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ProductosServicio } from '../../services/productos-servicio';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{

  constructor(
    public Service : ProductosServicio){}

  ngOnInit(): void {
    this.get()
  }

  get(){
  this.Service.getProductos().subscribe({
    next: (data) => { this.Service.productos = data},
    error: (e) => { console.log(e)}
  })
  }

}
