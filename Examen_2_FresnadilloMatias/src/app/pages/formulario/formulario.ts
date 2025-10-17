import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceCliente } from '../../service/service-cliente';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario implements OnInit {

  formulario!: FormGroup;
  id!: string;
  editar!: boolean;

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: ServiceCliente
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      empresa: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.maxLength(30), Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^[0-9]+$')]],
      comentarios: ['', [Validators.maxLength(200)]],

    });

    // Verifica si hay ID para editar
    if (this.id) {
      this.editar = true;
      this.service.getCliente(this.id).subscribe(item => {
        this.formulario.patchValue(item);
      });
    }
  }

  enviarFormulario(): void {
    if(this.formulario.invalid){
      // En caso de que el boton se habilite en el nav se verifica que realmente el formulario sea valido
      alert("El formulario no es Valido!")
    }else{
      if (this.editar && this.id) {
        //ACTUALIZACION
        const itemActualizar = { ...this.formulario.value, id: this.id };
        this.service.updateCliente(itemActualizar).subscribe(() => {
          alert('¡Actualizado correctamente!');
          this.router.navigate(['/']);
        });
      } else {
        //NUEVO
        this.service.postCliente(this.formulario.value).subscribe({
          next: () => {
            alert('¡Creado correctamente!');
            this.router.navigate(['/']);
          },
          error: (e) => console.error(e)
        });
      }
    }
  }

  volver(): void {
    if (this.id) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }
}