import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LadingComponent } from "./lading/lading.component";

const routes: Routes = [
  {
    path: '',
    component: LadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {
}
