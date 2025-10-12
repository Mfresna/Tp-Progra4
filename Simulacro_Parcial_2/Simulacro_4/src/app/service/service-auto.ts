import { Injectable } from '@angular/core';
import Auto from '../models/auto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuto {

  readonly API_URL = "http://localhost:3000/autos"

  autos : Auto[]

  constructor(private http: HttpClient){
    this.autos = []
  }

  getAutos(){
    return this.http.get<Auto[]>(this.API_URL);
  }

  getAuto(id : string){
    return this.http.get<Auto>(`${this.API_URL}/${id}`);
  }

  postAuto(p : Auto){
    return this.http.post<Auto>(this.API_URL, p);
  }

  deleteAuto(id : string){
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  updateAuto(p: Auto) {
    return this.http.put<Auto>(`${this.API_URL}/${p.id}`, p);
  }
    
}
