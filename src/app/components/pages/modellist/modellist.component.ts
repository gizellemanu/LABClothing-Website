import { Component, OnInit } from '@angular/core';
import { ModelService } from '../../service/model.service';

@Component({
  selector: 'app-modellist',
  templateUrl: './modellist.component.html',
  styleUrls: ['./modellist.component.css']
})
export class ModellistComponent implements OnInit {
  modelos: any;

  constructor(private modelService: ModelService) {}

  ngOnInit() {
    this.modelService.getModelos().subscribe((data) => {
      this.modelos = data;
    });
  }
}
