import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColecaoService } from '../../serviço/coleçao.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  colecoesTotal?: number;
  modelosTotal?: number;
  orcamentoMedio?: number;

  colecoes: any[] = [];

  constructor(private http: HttpClient, private ColecaoService: ColecaoService) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/colecoes').subscribe(data => {
      this.colecoes = this.ColecaoService.sortTable(data, 'orcamento');
      this.colecoesTotal = data.length;
      this.modelosTotal = this.ColecaoService.calculateTotalModels(data);
      this.orcamentoMedio = this.ColecaoService.calculateAverageBudget(data);
    });
  }

  sortTable(coluna: string) {
    this.colecoes = this.ColecaoService.sortTable(this.colecoes || [], coluna);
  }
}