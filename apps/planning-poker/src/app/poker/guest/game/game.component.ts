import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cards } from '@shared/card/cards.enum';
import { GameState } from '@shared/enum/game-state.enum';
import { UserStatus } from '@shared/enum/user-status.enum';
import { User } from '@shared/model/user';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GuestService } from '../guest.service';

@Component({
  selector: 'planning-poker-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

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
  public gameState$: Observable<GameState>;
  public users$: Observable<User[]>;
  public userStatuses = UserStatus;
  private selectedCardValueSubject$: BehaviorSubject<Cards> = new BehaviorSubject<Cards>(null);
  private destroySubject$: Subject<null> = new Subject<null>();

  constructor(private guestService: GuestService) {
    this.selectedCard$ = this.selectedCardValueSubject$.asObservable();
  }

  public ngOnInit(): void {
    this.gameState$ = this.guestService.getGameState();
    this.users$ = this.guestService.getUsers();
    this.gameState$
      .pipe(
        takeUntil(this.destroySubject$)
      )
      .subscribe((gameState: GameState) => this.handleGameState(gameState));
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next(null);
  }

  public set selectedCard(value: Cards) {
    this.selectedCardValueSubject$.next(value);
  }

  public get selectedCard(): Cards {
    return this.selectedCardValueSubject$.getValue();
  }

  public onCardClick(card: Cards): void {
    this.selectedCard = card;
    this.guestService.sendCard(card);
  }

  private handleGameState(gameState: GameState): void {
    switch (gameState) {
      case GameState.IN_PROGRESS:
        this.selectedCard = null;
        break;
    }
  }
}
