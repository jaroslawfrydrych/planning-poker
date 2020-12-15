import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map, mergeMap, take } from 'rxjs/operators';

import { Cards, GameStates } from '@planning-poker/api-interfaces';
import { TakeUntilDestroy, untilDestroyed } from '@planning-poker/utils';

@Component({
  selector: 'planning-poker-table-card-container',
  templateUrl: './table-card-container.component.html',
  styleUrls: ['./table-card-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@TakeUntilDestroy()
export class TableCardContainerComponent {

  @Input() public label: string;
  @Input() public gameState$: Observable<GameStates>;
  @Input() public playerReady: boolean;
  public card$: BehaviorSubject<Cards> = new BehaviorSubject<Cards>(null);

  public get isInReviewState$(): Observable<boolean> {
    return this.gameState$
      .pipe(
        map((gameState: GameStates) => {
          return gameState === GameStates.REVIEW;
        })
      );
  }

  @Input()
  public set card(card: Cards) {
    if (typeof card === 'undefined') {
      return;
    }

    if (!this.gameState$) {
      this.card$.next(card);
      return;
    }

    this.gameState$
      .pipe(
        take(1),
        mergeMap((gameState: GameStates) => {
          if (gameState === GameStates.IN_PROGRESS) {
            return of(gameState)
              .pipe(delay(250));
          }

          return of(gameState);
        }),
        untilDestroyed(this)
      )
      .subscribe(() => {
        this.card$.next(card);
      });
  }

}
