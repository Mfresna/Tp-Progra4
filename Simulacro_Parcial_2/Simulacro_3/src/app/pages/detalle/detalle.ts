import { Component, OnInit } from '@angular/core';
import Profesor from '../../models/profesor';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioProfesor } from '../../service/servicio-profesor';

@Component({
  selector: 'app-detalle',
  imports: [],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class Detalle implements OnInit {

  item?: Profesor;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public service: ServicioProfesor
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.get(id);
  }

  get(id: string): void {
    this.service.getProfesor(id).subscribe({
      next: (data) => { this.item = data; },
      error: (e) => { console.error(e); }
    });
  }

  delete(id: string): void {
    this.service.deleteProfesor(id).subscribe({
      next: () => {
        alert('Eliminado correctamente!');
        this.router.navigate(['/']);
      },
      error: (error) => { console.error(error); }
    });
  }

  editar(p: Profesor): void {
    this.router.navigate(['/formulario', p.id]);
  }
}