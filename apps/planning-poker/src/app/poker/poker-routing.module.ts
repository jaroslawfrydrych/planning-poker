import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'guest',
    loadChildren: () => import('./guest/guest.module').then(m => m.GuestModule)
  },
  {
    path: 'host',
    loadChildren: () => import('./host/host.module').then(m => m.HostModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PokerRoutingModule {
}
