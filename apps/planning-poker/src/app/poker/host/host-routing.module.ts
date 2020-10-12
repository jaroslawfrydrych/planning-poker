import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { BoardResolver } from './board/board.resolver';

const routes: Routes = [
  {
    path: '',
    component: BoardComponent,
    resolve: {
      data: BoardResolver
    },
    data: {
      animation: 'BoardComponent'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostRoutingModule {
}
