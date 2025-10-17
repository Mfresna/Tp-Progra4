import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceCliente } from '../../service/service-cliente';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home  implements OnInit {

  constructor(
    public service: ServiceCliente
  ) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.service.getClientes().subscribe({
      next: (data) => { this.service.clientes = data; },
      error: (e) => { console.log(e); }
    });
  }

}