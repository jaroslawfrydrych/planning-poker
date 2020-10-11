import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Cards, GameStateBroadcastDto, GameStates } from '@planning-poker/api-interfaces';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
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
              private changeDetectorRef: ChangeDetectorRef) {
    this.selectedCard$ = this.selectedCardValueSubject$.asObservable();
  }

  public ngOnInit(): void {
    this.guestService.getGameState()
      .pipe(
        takeUntil(this.destroySubject$),
        filter((gameState: GameStateBroadcastDto) => gameState.room === this.guestService.roomId)
      )
      .subscribe((gameState: GameStateBroadcastDto) => this.handleGameState(gameState));
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next(null);
  }

  public set selectedCard(value: Cards) {
    if (this.inReview) {
      return;
    }

    this.selectedCardValueSubject$.next(value);
  }

  public onCardClick(card: Cards): void {
    this.selectedCard = card;
    this.guestService.sendCard(card);
  }

  private handleGameState(gameState: GameStateBroadcastDto): void {
    this.inReview = gameState.state === GameStates.REVIEW;

    if (gameState.state === GameStates.IN_PROGRESS) {
      this.selectedCardValueSubject$.next(null);
      this.changeDetectorRef.detectChanges();
    }
  }
}
