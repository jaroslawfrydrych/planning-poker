import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';

import { ModalService } from '@planning-poker/modal';

import { HostBaseGuard } from '../host-base.guard';
import { BoardComponent } from './board.component';

@Injectable({
  providedIn: 'root'
})
export class BoardGuard extends HostBaseGuard implements CanActivate, CanDeactivate<BoardComponent> {

  private discardSubject: Subject<boolean> = new Subject<boolean>();

  constructor(store: Store,
              router: Router,
              private modalService: ModalService) {
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

  public canDeactivate(component: BoardComponent, currentRoute: ActivatedRouteSnapshot,
                       currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | boolean {
    if (nextState.url === '/?reconnectFailed=true') {
      return true;
    }

    return this.modalService
      .confirm({
        text: 'Are you sure to end this session?',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      })
      .pipe(
        first()
      );
  }
}
