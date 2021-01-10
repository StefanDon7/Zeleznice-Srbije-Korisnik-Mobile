import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MojNalogPageRoutingModule } from './moj-nalog-routing.module';

import { MojNalogPage } from './moj-nalog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MojNalogPageRoutingModule
  ],
  declarations: [MojNalogPage]
})
export class MojNalogPageModule {}
