import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colectionedit',
  templateUrl: './colectionedit.component.html',
  styleUrls: ['./colectionedit.component.css']
})
export class ColectioneditComponent implements OnInit{
  colecao: any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private http: HttpClient) 
  { }
  
  ngOnInit() {
    const collectionId = this.route.snapshot.paramMap.get('id');
    this.http.get<any>('http://localhost:3000/colecoes/' + collectionId).subscribe(data => {
      this.colecao = data;
    });
  }
  public save() {
    this.http.put('http://localhost:3000/colecoes/' + this.colecao.id, this.colecao).subscribe(data => {});
  }
  public onSubmit() {
    this.save();
}
 public delet() {
  this.http.delete('http://localhost:3000/colecoes/' + this.colecao.id).subscribe(data => {
    this.router.navigate(['/menu/anchor/collection-listing']);
  });
}
collectionlist () {
  this.router.navigate(['sidebar/navbar/colectionlist']);
}
}

