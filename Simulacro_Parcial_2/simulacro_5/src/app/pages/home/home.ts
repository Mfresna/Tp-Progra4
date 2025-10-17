import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceMoto } from '../../service/service-moto';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  constructor(
    public service: ServiceMoto
  ) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.service.getMotos().subscribe({
      next: (data) => { this.service.motos = data; },
      error: (e) => { console.log(e); }
    });
  }

}