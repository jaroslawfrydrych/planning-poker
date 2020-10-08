import { Component, OnInit } from '@angular/core';
import { Cards } from '@shared/card/cards.enum';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'planning-poker-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

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

  constructor() {
    this.selectedCard$ = this.selectedCardValueSubject$.asObservable();
  }

  ngOnInit(): void {
  }

  public set selectedCard(value: Cards) {
    this.selectedCardValueSubject$.next(value);
  }

  public get selectedCard(): Cards {
    return this.selectedCardValueSubject$.getValue();
  }

  public onCardClick(card: Cards): void {
    this.selectedCard = card;
  }
}
