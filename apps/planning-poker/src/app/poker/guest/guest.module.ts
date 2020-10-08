import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { GuestRoutingModule } from './guest-routing.module';
import { RoomCodeComponent } from './room-code/room-code.component';
import { YourNameComponent } from './your-name/your-name.component';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [RoomCodeComponent, YourNameComponent, GameComponent],
  imports: [
    CommonModule,
    GuestRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class GuestModule {
}
