import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { cpfValidator } from './cadastro.module';
import { userValidator } from './cadastro.module';
import { passwordValidator } from './cadastro.module';
import { emailValidator } from './cadastro.module';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  form: FormGroup;
  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      user: ['', userValidator],
      password: '',
      confirmpassword: ['', passwordValidator],
      email:['', emailValidator],
      name: '',
      end: '',
      date: '',
      cpf: ['', cpfValidator]
    })
  }

  onSubmit(){
    console.log(this.form.controls.user);
    console.log(this.form.controls.password);
    console.log(this.form.controls.confirmpassword);
    console.log(this.form.controls.email);
    console.log(this.form.controls.name);
    console.log(this.form.controls.end);
    console.log(this.form.controls.date);
    console.log(this.form.controls.cpf);
  }

  ngOnInit() {
  }

}
