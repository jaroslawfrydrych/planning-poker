import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { RoomCodeComponent } from './room-code/room-code.component';
import { YourNameComponent } from './your-name/your-name.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'room-code'
  },
  {
    path: 'room-code',
    component: RoomCodeComponent
  },
  {
    path: 'your-name',
    component: YourNameComponent
  },
  {
    path: 'game',
    component: GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule {
}
