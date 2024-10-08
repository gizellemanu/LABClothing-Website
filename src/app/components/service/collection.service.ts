import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private apiUrl='http://localhost:3000/colecoes'

  constructor(private http: HttpClient, private router: Router) { }

 calculateTotalModels(colecoes: any[]): number { return colecoes.reduce((total: number, colecao: any) => total + Number(colecao.modelo), 0);}

  calculateAverageBudget(colecoes: any[]): number {
    let totalOrcamento = 0;
    for (let i = 0; i < colecoes.length; i++) {
      const budget = colecoes[i].orcamento.replace(/[^\d.-]/g, '');
      totalOrcamento += parseFloat(budget);
    }
    return totalOrcamento / colecoes.length;
  }

  sortTable(colecoes: any[], coluna: string): any[] {
    if (coluna === 'colecao' || coluna === 'responsavel') {
      return colecoes.sort((a, b) => a[coluna].toLowerCase().localeCompare(b[coluna].toLowerCase()));
    } else {
      const sorted = colecoes
        .filter(item => item.hasOwnProperty('orcamento'))
        .sort((a, b) => {
          const budgetA = parseFloat(a.orcamento.replace('R$', '').replace('.', '').replace(',', '.'));
          const budgetB = parseFloat(b.orcamento.replace('R$', '').replace('.', '').replace(',', '.'));
          return budgetB - budgetA;
        });
      return sorted.slice(0, 5);
    }
  }

  addcollection(collection: any): Observable<any> {return this.http.post<any>(this.apiUrl, collection); }
}