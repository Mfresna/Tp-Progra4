import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceAuto } from '../../service/service-auto';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  constructor(
    public service: ServiceAuto
  ) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.service.getAutos().subscribe({
      next: (data) => { this.service.autos = data; },
      error: (e) => { console.log(e); }
    });
  }

}