import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
  
@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

    form: FormGroup;
    constructor(private fb:FormBuilder) {
      this.form = this.fb.group({
      nometitular: [''],
      numerocartao: [''],
      validade: [''],
      codigoseguranca: [''],
      cpf: ['']
    })
  }

  onSubmit(){
    console.log(this.form.controls.nometitular);
    console.log(this.form.controls.numerocartao);
    console.log(this.form.controls.validade);
    console.log(this.form.controls.codigoseguranca);
    console.log(this.form.controls.cpf);
  }
  
  ngOnInit() {
  }
}

