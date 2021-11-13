import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { TemplateModule } from '@rx-angular/template';

import { UiModule } from '@planning-poker/ui';

import { SharedModule } from '../../shared/shared.module';
import { BoardComponent } from './features/board/board.component';
import { HostRoutingModule } from './host-routing.module';
import { HostState } from './store/states/host.state';
import { WaitComponent } from './features/wait/wait.component';

@NgModule({
  declarations: [
    BoardComponent,
    WaitComponent
  ],
  imports: [
    CommonModule,
    HostRoutingModule,
    UiModule,
    SharedModule,
    NgxsModule.forFeature([
      HostState
    ]),
    TemplateModule
  ]
})
export class HostModule {
}
