import { Component, OnInit } from '@angular/core';
import Cliente from '../../model/Cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceCliente } from '../../service/service-cliente';

@Component({
  selector: 'app-detalle',
  imports: [],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class Detalle  implements OnInit {

  cliente?: Cliente;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public service: ServiceCliente
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.get(id);
  }

  get(id: string): void {
    this.service.getCliente(id).subscribe({
      next: (data) => { this.cliente = data; },
      error: (e) => { console.error(e); }
    });
  }

  delete(id: string): void {
    this.service.deleteCliente(id).subscribe({
      next: () => {
        alert('Eliminado correctamente!');
        this.router.navigate(['/']);
      },
      error: (error) => { console.error(error); }
    });
  }

  editar(c: Cliente): void {
    this.router.navigate(['/formulario', c.id]);
  }
}