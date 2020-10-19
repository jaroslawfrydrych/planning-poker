import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './lading/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: {
      animation: 'LandingComponent'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {
}
