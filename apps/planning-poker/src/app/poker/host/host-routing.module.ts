import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './features/board/board.component';
import { BoardGuard } from './features/board/board.guard';
import { WaitComponent } from './features/wait/wait.component';

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
