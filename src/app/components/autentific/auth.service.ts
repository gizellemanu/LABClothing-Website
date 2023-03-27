import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  calcularModelosTotal(colecoes: any[]): number {
    return colecoes.reduce((total: number, colecao: any) => total + colecao.modelos, 0);
  }

  calcularOrcamentoMedio(colecoes: any[]): number {
    const orcamentos = colecoes.map(colecao => parseFloat(colecao.orcamento.replace('R$', '').replace('.', '').replace(',', '.')));
    return orcamentos.reduce((total: number, orcamento: number) => total + orcamento, 0) / colecoes.length;
  }

  ordenarTabela(colecoes: any[], coluna: string): any[] {
    return colecoes.sort((a, b) => {
      if (coluna === 'colecoes' || coluna === 'responsavel') {
        if (a[coluna].toLowerCase() < b[coluna].toLowerCase()) {
          return -1;
        }
        if (a[coluna].toLowerCase() > b[coluna].toLowerCase()) {
          return 1;
        }
        return 0;
      } else {
        const orcamentoA = parseFloat(a.orcamento.replace('R$', '').replace('.', '').replace(',', '.'));
        const orcamentoB = parseFloat(b.orcamento.replace('R$', '').replace('.', '').replace(',', '.'));
        return orcamentoB - orcamentoA;
      }
    });
  }

}