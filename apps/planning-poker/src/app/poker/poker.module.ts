import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PokerRoutingModule } from './poker-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PokerRoutingModule,
    HttpClientModule
  ]
})
export class PokerModule {
}
