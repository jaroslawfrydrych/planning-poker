import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { HostBaseGuard } from '../host-base.guard';

@Injectable({
  providedIn: 'root'
})
export class WaitGuard extends HostBaseGuard implements CanActivate {

  constructor(store: Store,
              router: Router) {
    super(store, router);
  }

  public canActivate(): Observable<boolean> {
    return this.hasRoomNumber()
      .pipe(
        map((hasRoomNumber: boolean) => !hasRoomNumber),
        tap((allowToGo: boolean) => {
          if (!allowToGo) {
            this.navigateToHomePage();
          }
        })
      );
  }
}
