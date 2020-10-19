import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { RoomInfo } from '@planning-poker/api-interfaces';

import { GuestService } from '../guest.service';

@Injectable({
  providedIn: 'root'
})
export class GameResolver implements Resolve<RoomInfo> {

  constructor(private guestService: GuestService) {
  }

  resolve(): Observable<RoomInfo> {
    return this.guestService.getRoomInfo();
  }
}
