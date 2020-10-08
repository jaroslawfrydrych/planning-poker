import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BoardComponent } from './board/board.component';
import { HostRoutingModule } from './host-routing.module';

@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    HostRoutingModule,
    SharedModule
  ]
})
export class HostModule {
}
