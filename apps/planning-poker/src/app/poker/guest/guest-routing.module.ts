import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './game/game.component';
import { GameGuard } from './game/game.guard';
import { GameResolver } from './game/game.resolver';
import { RoomCodeComponent } from './room-code/room-code.component';
import { RoomCodeGuard } from './room-code/room-code.guard';
import { YourNameComponent } from './your-name/your-name.component';
import { YourNameGuard } from './your-name/your-name.guard';

const routes: Routes = [
  {
    path: 'room-code',
    component: RoomCodeComponent,
    canActivate: [
      RoomCodeGuard
    ],
    data: {
      animation: 'RoomCodeComponent'
    }
  },
  {
    path: 'your-name',
    component: YourNameComponent,
    canActivate: [
      YourNameGuard
    ],
    data: {
      animation: 'YourNameComponent'
    }
  },
  {
    path: 'game',
    component: GameComponent,
    canActivate: [
      GameGuard
    ],
    resolve: {
      data: GameResolver
    },
    data: {
      animation: 'GameComponent'
    }
  },
  {
    path: '**',
    redirectTo: 'room-code'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule {
}
