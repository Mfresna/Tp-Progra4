import { Component } from '@angular/core';
import Producto from '../../models/producto';
import { ProductosServicio } from '../../services/productos-servicio';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  imports: [],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css'
})
export class ProductoDetalle {

  item : Producto | undefined

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    public service : ProductosServicio){}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.get(id)
  }

  get(id : string){
    this.service.getProducto(id).subscribe({
      next: (data) => { this.item = data},
      error: (e) => { console.log(e)}
    })
  }

  delete(id : string){
    this.service.deleteProducto(id).subscribe({
      next: (data) => {
        alert("Eliminado Correctemtne!") ;
        this.router.navigate(['/']);
      },
      error: (error) => { console.log(error) }
    })
  }

  editar(p: Producto) {
    this.router.navigate(['/formulario', p.id]);
  }

}
