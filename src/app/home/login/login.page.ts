import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      user: '',
      password: '',
    })
  }

  onSubmit(){
    console.log(this.form.controls.user);
    console.log(this.form.controls.password);
  }

  ngOnInit() {
    }

}
