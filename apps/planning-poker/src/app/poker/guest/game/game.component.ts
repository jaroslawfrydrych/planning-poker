import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cards, GameStateBroadcastDto, GameStates, RoomInfoInterface } from '@planning-poker/api-interfaces';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GuestService } from '../guest.service';

@Component({
  selector: 'planning-poker-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  public inReview = false;
  public selectedCard$: Observable<Cards>;
  public cards: Cards[] = [
    Cards.ZERO,
    Cards.HALF,
    Cards.ONE,
    Cards.TWO,
    Cards.THREE,
    Cards.FIVE,
    Cards.EIGHT,
    Cards.THIRTEEN,
    Cards.TWENTY,
    Cards.FORTY,
    Cards.HUNDRED,
    Cards.QUESTION_MARK,
    Cards.COFFEE,
    Cards.INFINITE
  ];
  private selectedCardValueSubject$: BehaviorSubject<Cards> = new BehaviorSubject<Cards>(null);
  private destroySubject$: Subject<null> = new Subject<null>();

  constructor(private guestService: GuestService,
              private changeDetectorRef: ChangeDetectorRef,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private $gaService: GoogleAnalyticsService) {
    this.selectedCard$ = this.selectedCardValueSubject$.asObservable();
  }

  public ngOnInit(): void {
    this.$gaService.pageView('/game');

    const roomInfo: RoomInfoInterface = this.activatedRoute.snapshot.data.data;
    this.inReview = roomInfo.state === GameStates.REVIEW;

    this.guestService.getGameState()
      .pipe(
        takeUntil(this.destroySubject$)
      )
      .subscribe((gameState: GameStateBroadcastDto) => this.handleGameState(gameState));

    this.guestService.onRoomRemove()
      .pipe(
        takeUntil(this.destroySubject$)
      )
      .subscribe(() => this.handleRoomRemove());
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next(null);
  }

  public set selectedCard(value: Cards) {
    if (this.inReview) {
      return;
    }

    this.selectedCardValueSubject$.next(value);
    this.guestService.sendCard(value);
  }

  public onCardClick(card: Cards): void {
    this.$gaService.event('user_voted', 'guest', 'User voted');
    this.selectedCard = card;
  }

  private handleGameState(gameState: GameStateBroadcastDto): void {
    this.inReview = gameState.state === GameStates.REVIEW;

    if (gameState.state === GameStates.IN_PROGRESS) {
      this.selectedCardValueSubject$.next(null);
      this.changeDetectorRef.detectChanges();
    }
  }

  private handleRoomRemove(): void {
    this.router.navigateByUrl('/');
  }
}
