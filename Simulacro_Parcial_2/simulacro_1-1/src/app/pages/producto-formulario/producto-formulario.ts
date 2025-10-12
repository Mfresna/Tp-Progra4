import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosServicio } from '../../services/productos-servicio';
import { Location } from '@angular/common';

@Component({
  selector: 'app-producto-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './producto-formulario.html',
  styleUrl: './producto-formulario.css'
})
export class ProductoFormulario implements OnInit{

    formulario!: FormGroup;
    id!: string;
    editar!: boolean;

    constructor(
      private location: Location,
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private service: ProductosServicio
    ) {}

    ngOnInit(): void {
      this.id! = this.route.snapshot.params['id'];

      this.formulario = this.fb.group({
        nombre: ['',[Validators.required,Validators.minLength(3)]],
        precio: ['',[Validators.required,Validators.min(0)]]
      });

      /*Verifica si hay ID*/
      if (this.id) {
        this.editar = true;
        this.service.getProducto(this.id).subscribe(
          item => {this.formulario.patchValue(item);});
      }
    }


    enviarFormulario(){
      if(this.editar && this.id){
        //Actualizar
        const itemActualizar = this.formulario.value
        itemActualizar.id = this.id;

        this.service.updateProducto(itemActualizar).subscribe(() => {
          alert('Actualizado Correctamente!');
          this.router.navigate(['/']);
        });
      }else{
        //Crear nuevo
        this.service.postProducto(this.formulario.value).subscribe({
          next: (data) => { 
            alert('Creado Correctamente!');
            this.router.navigate(['/']);
           },
          error: (e) => { console.log(e) }
        })
      }
    }

    volver(){
      if(this.id){
        this.location.back();
      }else{
        this.router.navigate(['/']);
      }
    }
}



