import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LadingComponent } from './lading/lading.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    LadingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule {
}
