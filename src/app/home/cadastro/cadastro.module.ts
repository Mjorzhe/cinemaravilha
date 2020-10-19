import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, AbstractControl } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPageRoutingModule } from './cadastro-routing.module';

import { CadastroPage } from './cadastro.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule
  ],
  declarations: [CadastroPage]
})
export class CadastroPageModule {}

export function cpfValidator(control: AbstractControl){
  if(control && control.value != null || control.value != undefined){
    const regex = new RegExp('^[0-9]{11}$');

    if(!regex.test(control.value)){
      return {
        isError: true
      };
    }
  }
  return null;
}

export function emailValidator(control: AbstractControl){
  if(control && control.value != null || control.value != undefined){
    const regex = new RegExp('([A.-z]{4,50}\@[A-z]{3,32})[.]{1}[A-z]{1,32}');

    if(!regex.test(control.value)){
      return {
        isError: true
      };
    }
  }
  return null;
}

export function userValidator(control: AbstractControl){
  if(control && control.value != null || control.value != undefined){
    const regex = new RegExp('^[A-z]{4,32}$');

    if(!regex.test(control.value)){
      return {
        isError: true
      };
    }
  }
  return null;
}

export function passwordValidator(control: AbstractControl){
  if(control && control.value != null || control.value != undefined){
    const confirmarsenhaValue = control.value;

    const passControl = control.root.get('password');
    if(passControl){
      const passValue = passControl.value;
      if(passValue !== confirmarsenhaValue){
        return{
          isError:true
        };
      }
    }
  }
}