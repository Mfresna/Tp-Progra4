import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioProfesor } from '../../service/servicio-profesor';
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
    private service: ServicioProfesor
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido:['', [Validators.required, Validators.minLength(3)]],
      materia: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
    });

    // Verifica si hay ID para editar
    if (this.id) {
      this.editar = true;
      this.service.getProfesor(this.id).subscribe(item => {
        this.formulario.patchValue(item);
      });
    }
  }

  enviarFormulario(): void {
    if (this.editar && this.id) {
      // Actualizar producto existente
      const itemActualizar = { ...this.formulario.value, id: this.id };
      this.service.UpdateProfesor(itemActualizar).subscribe(() => {
        alert('¡Actualizado correctamente!');
        this.router.navigate(['/']);
      });
    } else {
      // Crear nuevo producto
      this.service.psotProfesor(this.formulario.value).subscribe({
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