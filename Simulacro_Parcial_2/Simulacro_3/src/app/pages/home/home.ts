import { Component, OnInit } from '@angular/core';
import { ServicioProfesor } from '../../service/servicio-profesor';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  constructor(
    public service: ServicioProfesor
  ) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.service.getProfesores().subscribe({
      next: (data) => { this.service.profesores = data; },
      error: (e) => { console.log(e); }
    });
  }

}