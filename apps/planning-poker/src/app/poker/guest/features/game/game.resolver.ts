import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { RoomInfo } from '@planning-poker/api-interfaces';

import { GuestService } from '../../guest.service';
import { GuestActions } from '../../store/actions/guest.actions';
import { GuestState } from '../../store/states/guest.state';
import SetRoomInfo = GuestActions.SetRoomInfo;

@Injectable({
  providedIn: 'root'
})
export class GameResolver implements Resolve<RoomInfo> {

  constructor(private guestService: GuestService,
              private store: Store) {
  }

  resolve(): Observable<RoomInfo> {
    return this.guestService.getRoomInfo(this.store.selectSnapshot(GuestState.roomNumber))
      .pipe(
        tap((roomInfo: RoomInfo) => this.store.dispatch(new SetRoomInfo(roomInfo)))
      );
  }
}
