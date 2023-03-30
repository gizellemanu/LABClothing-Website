import { Component } from '@angular/core';
import { CollectionService } from '../../service/collection.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-colectionsheet',
  templateUrl: './colectionsheet.component.html',
  styleUrls: ['./colectionsheet.component.css']
})
export class ColectionsheetComponent {
  form: FormGroup;

  constructor(private collectionService: CollectionService, private fb:FormBuilder) {
  this.form = this.fb.group({
    colecao: ['', Validators.required],
    responsavel: ['', Validators.required],
    estacaoLancamento: ['', Validators.required],
    orcamento: ['', Validators.required],
    marca: ['', Validators.required],
    modelo: ['', Validators.required],
    anoLancamento: ['', Validators.required],
  });
 
}
onSubmit() {
  const collection = this.form.value;
  this.collectionService.addcollection(collection).subscribe();
  this.form.reset();
}
}

