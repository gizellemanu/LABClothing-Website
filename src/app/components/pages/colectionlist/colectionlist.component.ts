import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../service/collection.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-colectionlist',
  templateUrl: './colectionlist.component.html',
  styleUrls: ['./colectionlist.component.css']
})
export class ColectionlistComponent implements OnInit{
  colecoes: any[] = [];

  constructor(
    private httpClient: HttpClient, 
    private collectionService: CollectionService,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.httpClient.get<any[]>('http://localhost:3000/colecoes')
      .subscribe(data => {
        this.colecoes = data;
      });
  }
  
  editcollection(collection:any)
  {
    this.router.navigate(['sidebar/navbar/colectionedit', collection.id]);
  }
}
