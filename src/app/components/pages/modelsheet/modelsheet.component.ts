import { Component } from '@angular/core';
import { ModelService } from '../../service/model.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modelsheet',
  templateUrl: './modelsheet.component.html',
  styleUrls: ['./modelsheet.component.css']
})
export class ModelsheetComponent  {
  form: FormGroup;

  constructor(private fb:FormBuilder, private modelService: ModelService ) {
    this.form = this.fb.group({
      nomemodelo: ['', Validators.required],
      colecao: ['', Validators.required],
      tipo: ['', Validators.required],
      bordado: ['', Validators.required],
      estampa: ['', Validators.required],
      responsavel: ['', Validators.required],
    });
 
  }
  onSubmit() {
    const model = this.form.value;
    this.modelService.addModel(model).subscribe();
    this.form.reset();
}

}