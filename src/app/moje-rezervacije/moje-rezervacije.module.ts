import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MojeRezervacijePageRoutingModule } from './moje-rezervacije-routing.module';

import { MojeRezervacijePage } from './moje-rezervacije.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MojeRezervacijePageRoutingModule
  ],
  declarations: [MojeRezervacijePage]
})
export class MojeRezervacijePageModule {}
