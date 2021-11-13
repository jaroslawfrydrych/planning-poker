import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiModule } from '@planning-poker/ui';

import { SharedModule } from '@shared/shared.module';

import { LandingComponent } from './features/lading/landing.component';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    UiModule,
    SharedModule
  ]
})
export class LandingModule {
}
