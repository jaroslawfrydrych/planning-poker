import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { LetModule } from '@rx-angular/template';

import { UiModule } from '@planning-poker/ui';

import { SharedModule } from '../../shared/shared.module';
import { GameComponent } from './game/game.component';
import { GuestRoutingModule } from './guest-routing.module';
import { RoomCodeComponent } from './room-code/room-code.component';
import { GuestState } from './store/states/guest.state';
import { YourNameComponent } from './your-name/your-name.component';

@NgModule({
  declarations: [
    RoomCodeComponent,
    YourNameComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    UiModule,
    SharedModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([
      GuestState
    ]),
    LetModule
  ]
})
export class GuestModule {
}
