import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { RoomInfoInterface } from '@planning-poker/api-interfaces';
import { Observable } from 'rxjs';
import { GuestService } from '../guest.service';

@Injectable({
  providedIn: 'root'
})
export class GameResolver implements Resolve<RoomInfoInterface> {

  constructor(private guestService: GuestService) {
  }

  resolve(): Observable<RoomInfoInterface> {
    return this.guestService.getRoomInfo();
  }
}
