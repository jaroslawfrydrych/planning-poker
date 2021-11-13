import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, finalize, mergeMap, tap } from 'rxjs/operators';

import { TakeUntilDestroy, untilDestroyed } from '@planning-poker/utils';

import { CodeComponent } from '@shared/form/code/code.component';

import { GuestActions } from '../../store/actions/guest.actions';
import { GuestState } from '../../store/states/guest.state';

import RoomNumberValidation = GuestActions.RoomNumberValidation;
import GuestRoomNumberValidationInit = GuestActions.GuestRoomNumberValidationInit;

@Component({
  selector: 'planning-poker-room-code',
  templateUrl: './room-code.component.html',
  styleUrls: ['./room-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@TakeUntilDestroy()
export class RoomCodeComponent implements OnInit {

  @ViewChild(CodeComponent) public codeComponent: CodeComponent;
  public loading$: Observable<boolean>;
  public success$: Observable<boolean>;
  public error$: Observable<boolean>;
  public queryRoomCode: string = null;
  private loadingSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private successSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private errorSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router,
              private store: Store,
              private $gaService: GoogleAnalyticsService,
              private activatedRoute: ActivatedRoute) {
    this.loading$ = this.loadingSubject$.asObservable();
    this.success$ = this.successSubject$.asObservable();
    this.error$ = this.errorSubject$.asObservable();
  }

  public ngOnInit(): void {
    this.store.dispatch(new GuestRoomNumberValidationInit());
    this.handleQueryParams();
  }

  public onRoomNumberSubmit(roomNumber: string) {
    if (this.loadingSubject$.getValue()) {
      return;
    }

    this.loadingSubject$.next(true);

    this.store.dispatch(new RoomNumberValidation(roomNumber))
      .pipe(
        finalize(() => this.loadingSubject$.next(false)),
        mergeMap(() => this.store.select(GuestState.isRoomNumberValid)),
        tap((isRoomNumberValid: boolean) => {
          if (isRoomNumberValid) {
            this.successSubject$.next(true);
          } else {
            this.errorSubject$.next(true);
          }
        }),
        delay(1000),
        tap(() => this.errorSubject$.next(false)),
        untilDestroyed(this)
      )
      .subscribe((isRoomNumberValid: boolean) => this.handleRoomNumberValidation(isRoomNumberValid));
  }

  private handleRoomNumberValidation(isRoomNumberValid: boolean): void {
    if (isRoomNumberValid) {
      this.router.navigateByUrl('/guest/your-name');
    } else {
      this.codeComponent.reset();
    }
  }

  private handleQueryParams() {
    const queryPrams: any = this.activatedRoute.snapshot.queryParams;

    if (queryPrams.code) {
      this.queryRoomCode = queryPrams.code;
    }
  }
}
