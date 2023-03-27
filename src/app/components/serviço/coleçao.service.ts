import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {
  private apiUrl = 'http://localhost:3000/coleções';

  constructor(private http: HttpClient) {}

  getColecoes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}