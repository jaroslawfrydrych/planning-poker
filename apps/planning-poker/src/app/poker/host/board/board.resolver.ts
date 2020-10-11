import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { RoomInfoInterface } from '../../../../../../../libs/api-interfaces/src';
import { HostService } from '../host.service';

@Injectable({
  providedIn: 'root'
})
export class BoardResolver implements Resolve<RoomInfoInterface> {

  constructor(private readonly hostService: HostService) {
  }

  public resolve(): Observable<RoomInfoInterface> {
    return this.hostService.createRoom();
  }
}
