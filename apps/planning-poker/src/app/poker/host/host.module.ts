import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BoardComponent } from './board/board.component';
import { HostRoutingModule } from './host-routing.module';
import { WaitComponent } from './wait/wait.component';

@NgModule({
  declarations: [BoardComponent, WaitComponent],
  imports: [
    CommonModule,
    HostRoutingModule,
    SharedModule
  ]
})
export class HostModule {
}
