import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Cards, GameStates } from '@planning-poker/api-interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'planning-poker-card-with-label',
  templateUrl: './card-with-label.component.html',
  styleUrls: ['./card-with-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardWithLabelComponent {

  @Input() public label: string;
  @Input() public gameState: GameStates;
  @Input() public playerReady: boolean;
  public card$: Observable<Cards>;
  private cardSubject$: BehaviorSubject<Cards>;

  constructor() {
    this.cardSubject$ = new BehaviorSubject<Cards>(null);
    this.card$ = this.cardSubject$.asObservable();
  }

  public get isInReviewState(): boolean {
    return this.gameState === GameStates.REVIEW;
  }

  @Input()
  public set card(card: Cards) {
    this.cardSubject$.next(card);
  }

  public get card(): Cards {
    return this.cardSubject$.getValue();
  }
}
