import { Component, OnInit } from '@angular/core';
import Auto from '../../models/auto';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAuto } from '../../service/service-auto';

@Component({
  selector: 'app-detalle',
  imports: [],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class Detalle  implements OnInit {

  item?: Auto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public service: ServiceAuto
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.get(id);
  }

  get(id: string): void {
    this.service.getAuto(id).subscribe({
      next: (data) => { this.item = data; },
      error: (e) => { console.error(e); }
    });
  }

  delete(id: string): void {
    this.service.deleteAuto(id).subscribe({
      next: () => {
        alert('Eliminado correctamente!');
        this.router.navigate(['/']);
      },
      error: (error) => { console.error(error); }
    });
  }

  editar(a: Auto): void {
    this.router.navigate(['/formulario', a.id]);
  }
}