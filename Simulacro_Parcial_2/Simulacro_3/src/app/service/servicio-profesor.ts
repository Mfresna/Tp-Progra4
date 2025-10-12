import { Injectable } from '@angular/core';
import Profesor from '../models/profesor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioProfesor {
  
  readonly API_URL = "http://localhost:3000/profesores"

  profesores : Profesor[]

  constructor(private http: HttpClient){
    this.profesores = []
  }

  getProfesores(){
    return this.http.get<Profesor[]>(this.API_URL);
  }

  getProfesor(id : string){
    return this.http.get<Profesor>(`${this.API_URL}/${id}`);
  }

  psotProfesor(p : Profesor){
    return this.http.post<Profesor>(this.API_URL, p);
  }

  deleteProfesor(id : string){
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  UpdateProfesor(p: Profesor) {
    return this.http.put<Profesor>(`${this.API_URL}/${p.id}`, p);
  }

}



