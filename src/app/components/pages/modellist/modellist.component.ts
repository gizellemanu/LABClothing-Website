import { Component, OnInit } from '@angular/core';
import { ModelService } from '../../service/model.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modellist',
  templateUrl: './modellist.component.html',
  styleUrls: ['./modellist.component.css']
})
export class ModellistComponent implements OnInit {
  modelos: any[] = [];

  constructor(
    private httpClient: HttpClient,
    private modelService: ModelService,
    private router: Router ) {}

  ngOnInit() {
    this.modelService.getModelos().subscribe((data) => {
      this.modelos = data;
    });
  }

  editmodel(model:any) {this.router.navigate(['sidebar/navbar/modeledit', model.id], { state: { data: model } });}
 
}
