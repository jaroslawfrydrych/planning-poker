import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { UiModule } from '@planning-poker/ui';

import { SharedModule } from '../../shared/shared.module';
import { BoardComponent } from './board/board.component';
import { HostRoutingModule } from './host-routing.module';
import { HostState } from './store/states/host.state';
import { WaitComponent } from './wait/wait.component';
import { TemplateModule } from 'undefined';

@NgModule({
  declarations: [BoardComponent, WaitComponent],
  imports: [
    CommonModule,
    HostRoutingModule,
    UiModule,
    SharedModule,
    NgxsModule.forFeature([HostState]),
    TemplateModule,
  ],
})
export class HostModule {}
