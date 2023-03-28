import { Component, OnInit } from '@angular/core';
import { ColecaoService } from '../../serviço/coleçao.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-colectionlist',
  templateUrl: './colectionlist.component.html',
  styleUrls: ['./colectionlist.component.css']
})
export class ColectionlistComponent implements OnInit{
  colecoes: any[] = [];

  constructor(private httpClient: HttpClient, private colecaoService: ColecaoService,private router: Router ) { }

  ngOnInit(): void {
    this.httpClient.get<any[]>('http://localhost:3000/colecoes')
      .subscribe(data => {
        this.colecoes = data;
      });
  }
  
}
