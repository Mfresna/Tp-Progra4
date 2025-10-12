import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAuto } from '../../service/service-auto';
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
    private service: ServiceAuto
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.formulario = this.fb.group({
      marca: ['', [Validators.required, Validators.minLength(3)]],
      modelo: ['', [Validators.required, Validators.minLength(3)]],
      anio: ['', [Validators.required, Validators.min(1990), Validators.max(2025)]],
      color: ['', [Validators.required, Validators.minLength(3)]],
      precio: ['', [Validators.required, Validators.min(0)]],
      combustible: ['', [Validators.required, Validators.minLength(3)]]
    });

    // Verifica si hay ID para editar
    if (this.id) {
      this.editar = true;
      this.service.getAuto(this.id).subscribe(item => {
        this.formulario.patchValue(item);
      });
    }
  }

  enviarFormulario(): void {
    if (this.editar && this.id) {
      // Actualizar producto existente
      const itemActualizar = { ...this.formulario.value, id: this.id };
      this.service.updateAuto(itemActualizar).subscribe(() => {
        alert('¡Actualizado correctamente!');
        this.router.navigate(['/']);
      });
    } else {
      // Crear nuevo producto
      this.service.postAuto(this.formulario.value).subscribe({
        next: () => {
          alert('¡Creado correctamente!');
          this.router.navigate(['/']);
        },
        error: (e) => console.error(e)
      });
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