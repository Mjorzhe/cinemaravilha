import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-ingressos',
  templateUrl: './ingressos.page.html',
  styleUrls: ['./ingressos.page.scss'],
})
export class IngressosPage implements OnInit {

  form: FormGroup;
  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      meiaentrada: [''],
      entrada: '',
      meiaparceria: ['']
    })
  }

  onSubmit(){
    console.log(this.form.controls.meiaentrada);
    console.log(this.form.controls.entrada);
    console.log(this.form.controls.meiaparceria);
  }

  ngOnInit() {
  }

}

