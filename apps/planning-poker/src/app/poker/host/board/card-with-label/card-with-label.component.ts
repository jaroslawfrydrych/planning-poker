import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Cards, GameStates } from '@planning-poker/api-interfaces';

@Component({
  selector: 'planning-poker-card-with-label',
  templateUrl: './card-with-label.component.html',
  styleUrls: ['./card-with-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardWithLabelComponent {

  @Input() public card: Cards;
  @Input() public label: string;
  @Input() public gameState$: Observable<GameStates>;
  @Input() public playerReady: boolean;

  constructor() {
  }

  public get isInReviewState$(): Observable<boolean> {
    return this.gameState$
      .pipe(
        map((gameState: GameStates) => {
          return gameState === GameStates.REVIEW;
        })
      );
  }
}
