import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private apiUrl = 'http://localhost:3000/modelos';

  constructor(private http: HttpClient, private router: Router) {}

  getModelos(): Observable<any> { return this.http.get<any>(this.apiUrl);}

  getModelo(id: number): Observable<any> { const url = `${this.apiUrl}/${id}`; return this.http.get<any>(url);}

  addModel(model: any): Observable<any> {return this.http.post<any>(this.apiUrl, model);}

}