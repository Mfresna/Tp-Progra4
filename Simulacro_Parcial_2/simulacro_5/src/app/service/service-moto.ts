import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Moto from '../model/motos';

@Injectable({
  providedIn: 'root'
})
export class ServiceMoto {

  readonly API_URL = "http://localhost:3000/motos"

  motos : Moto[]

  constructor(private http: HttpClient){
    this.motos = []
  }

  getMotos(){
    return this.http.get<Moto[]>(this.API_URL);
  }

  getMoto(id : string){
    return this.http.get<Moto>(`${this.API_URL}/${id}`);
  }

  postMoto(m : Moto){
    return this.http.post<Moto>(this.API_URL, m);
  }

  deleteMoto(id : string){
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  updateMoto(m: Moto) {
    return this.http.put<Moto>(`${this.API_URL}/${m.id}`, m);
  }
}


