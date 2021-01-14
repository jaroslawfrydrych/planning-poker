import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { BoardGuard } from './board/board.guard';
import { WaitComponent } from './wait/wait.component';

const routes: Routes = [
  {
    path: 'wait',
    component: WaitComponent,
    data: {
      animation: 'WaitComponent'
    }
  },
  {
    path: 'board',
    component: BoardComponent,
    canActivate: [
      BoardGuard
    ],
    canDeactivate: [
      BoardGuard
    ],
    data: {
      animation: 'BoardComponent'
    }
  },
  {
    path: '**',
    redirectTo: 'wait'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostRoutingModule {
}
