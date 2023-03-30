import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modeledit',
  templateUrl: './modeledit.component.html',
  styleUrls: ['./modeledit.component.css']
})
export class ModeleditComponent implements OnInit{
model: any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private http: HttpClient) 
  { }

  ngOnInit() {
   const modelId = this.route.snapshot.paramMap.get('id');
    this.http.get<any>('http://localhost:3000/modelos/' + modelId).subscribe(data => {
      this.model = data;
    }); 
  }
  public save() {
    this.http.put('http://localhost:3000/modelos/' + this.model.id, this.model).subscribe(data => {});
  }
  public onSubmit() {
    this.save();
}
public delet() {
  this.http.delete('http://localhost:3000/modelos/' + this.model.id).subscribe(data => {
    this.router.navigate(['sidebar/navbar/modellist']);
  });
}

navigateToModelList() {
    this.router.navigate(['sidebar/navbar/modellist']);
  }
}