import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MojNalogPage } from './moj-nalog.page';

const routes: Routes = [
  {
    path: '',
    component: MojNalogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MojNalogPageRoutingModule {}
