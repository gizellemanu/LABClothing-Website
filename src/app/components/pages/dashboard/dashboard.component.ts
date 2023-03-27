import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColecaoService } from '../../serviço/coleçao.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit {
  totalColecoes: number = 0;
  totalModelos: number = 0;
  mediaOrcamento: number = 0;
  maioresOrcamentos: any[] = [];
  colecoes: any[] = [];

  constructor(private colecaoService: ColecaoService, private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get<any[]>('http://localhost:3000/coleções').subscribe(colecoes => {
      this.colecoes = colecoes;


      this.totalColecoes = this.colecoes.length;
      this.totalModelos = this.colecoes.reduce((total, colecao) => total + colecao.modelos.length, 0);
      this.mediaOrcamento = this.colecoes.reduce((total, colecao) => total + colecao.orcamento, 0) / this.totalColecoes;


      this.colecoes.sort((a, b) => b.orcamento - a.orcamento);


      this.maioresOrcamentos = this.colecoes.slice(0, 5);
    });
  }

  getColecoes(): void {
    this.colecaoService.getColecoes().subscribe(colecoes => {
      this.totalColecoes = colecoes.length;
      this.totalModelos = colecoes.reduce((total, colecao) => total + colecao.modelos.length, 0);

      const orcamentos = colecoes.map(colecao => colecao.orcamento);
      this.mediaOrcamento = orcamentos.reduce((total, orcamento) => total + orcamento, 0) / this.totalColecoes;

      colecoes.sort((a, b) => b.orcamento - a.orcamento);
      this.maioresOrcamentos = colecoes.slice(0, 5).map(colecao => {
        return {
          codigo: colecao.id,
          nome: colecao.nome,
          orcamento: colecao.orcamento,
          responsavel: colecao.responsavel
        };
      });
    });
  }
}