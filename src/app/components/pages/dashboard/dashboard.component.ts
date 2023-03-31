import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CollectionService } from '../../service/collection.service';

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

  constructor(private http: HttpClient, private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/colecoes').subscribe(data => {
      this.colecoes = this.collectionService.sortTable(data, 'orcamento');
      this.colecoesTotal = data.length;
      this.modelosTotal = this.collectionService.calculateTotalModels(data);
      this.orcamentoMedio = this.collectionService.calculateAverageBudget(data);
    });
  }

  sortTable(coluna: string) {this.colecoes = this.collectionService.sortTable(this.colecoes || [], coluna);}
}