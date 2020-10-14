import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { HostService } from '../host.service';
import { BoardComponent } from './board.component';

@Injectable({
  providedIn: 'root'
})
export class BoardGuard implements CanActivate, CanDeactivate<BoardComponent> {

  private discardSubject: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router,
              private hostService: HostService) {
  }

  public canActivate(): boolean {
    const hasHostRoom: boolean = !!this.hostService.hostRoom;

    if (!hasHostRoom) {
      this.router.navigateByUrl('/');
    }

    return !!this.hostService.hostRoom;
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
