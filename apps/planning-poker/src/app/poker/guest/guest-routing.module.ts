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
    path: '',
    redirectTo: 'room-code'
  },
  {
    path: 'room-code',
    component: RoomCodeComponent,
    canActivate: [
      RoomCodeGuard
    ]
  },
  {
    path: 'your-name',
    component: YourNameComponent,
    canActivate: [
      YourNameGuard
    ]
  },
  {
    path: 'game',
    component: GameComponent,
    canActivate: [
      GameGuard
    ],
    resolve: {
      data: GameResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule {
}
