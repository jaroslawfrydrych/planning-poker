import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { SharedModule } from '../../shared/shared.module';
import { BoardComponent } from './board/board.component';
import { HostRoutingModule } from './host-routing.module';
import { HostState } from './store/states/host.state';
import { WaitComponent } from './wait/wait.component';

@NgModule({
  declarations: [
    BoardComponent,
    WaitComponent
  ],
  imports: [
    CommonModule,
    HostRoutingModule,
    SharedModule,
    NgxsModule.forFeature([
      HostState
    ])
  ]
})
export class HostModule {
}
