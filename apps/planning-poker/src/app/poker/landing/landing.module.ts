import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { LandingComponent } from './lading/landing.component';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule {
}
