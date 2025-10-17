import { Component, OnInit } from '@angular/core';
import Moto from '../../model/motos';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceMoto } from '../../service/service-moto';

@Component({
  selector: 'app-detalle',
  imports: [],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class Detalle implements OnInit {

  item?: Moto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public service: ServiceMoto
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.get(id);
  }

  get(id: string): void {
    this.service.getMoto(id).subscribe({
      next: (data) => { this.item = data; },
      error: (e) => { console.error(e); }
    });
  }

  delete(id: string): void {
    this.service.deleteMoto(id).subscribe({
      next: () => {
        alert('Eliminado correctamente!');
        this.router.navigate(['/']);
      },
      error: (error) => { console.error(error); }
    });
  }

  editar(m: Moto): void {
    this.router.navigate(['/formulario', m.id]);
  }
}