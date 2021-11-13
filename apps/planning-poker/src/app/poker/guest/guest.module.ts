import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { LetModule } from '@rx-angular/template';

import { UiModule } from '@planning-poker/ui';

import { SharedModule } from '../../shared/shared.module';
import { GameComponent } from './features/game/game.component';
import { ModalGameResultsReviewComponent } from './features/game/modal-game-results-review/modal-game-results-review.component';
import { GuestRoutingModule } from './guest-routing.module';
import { RoomCodeComponent } from './features/room-code/room-code.component';
import { GuestState } from './store/states/guest.state';
import { YourNameComponent } from './features/your-name/your-name.component';

@NgModule({
  declarations: [
    RoomCodeComponent,
    YourNameComponent,
    GameComponent,
    ModalGameResultsReviewComponent
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
