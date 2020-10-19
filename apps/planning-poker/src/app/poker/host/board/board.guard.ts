import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';

import { HostBaseGuard } from '../host-base.guard';
import { BoardComponent } from './board.component';

@Injectable({
  providedIn: 'root'
})
export class BoardGuard extends HostBaseGuard implements CanActivate, CanDeactivate<BoardComponent> {

  private discardSubject: Subject<boolean> = new Subject<boolean>();

  constructor(store: Store,
              router: Router) {
    super(store, router);
  }

  public canActivate(): Observable<boolean> {
    return this.hasRoomNumber()
      .pipe(
        map((hasRoomNumber: boolean) => hasRoomNumber),
        tap((allowToGo: boolean) => {
          if (!allowToGo) {
            this.navigateToHomePage();
          }
        })
      );
  }

  public canDeactivate(component: BoardComponent): Observable<boolean> {
    component.showLeaveModal();

    return this.discardSubject.asObservable()
      .pipe(
        first()
      );
  }

  public discard(): void {
    this.discardSubject.next(true);

    setTimeout(() => {
      this.discardSubject.next(true);
    });
  }

  public keep(): void {
    this.discardSubject.next(false);
  }
}
