import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngressosPage } from './ingressos.page';

const routes: Routes = [
  {
    path: '',
    component: IngressosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngressosPageRoutingModule {}
