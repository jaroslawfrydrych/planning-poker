import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';

import { GameStates, Player, PlayerStatuses } from '@planning-poker/api-interfaces';

@Component({
  selector: 'planning-poker-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TableComponent {

  @Input() public players$: Observable<Player[]>;
  @Input() public gameState$: Observable<GameStates>;
  @Input() public cardsInRow$ = of(5);

  public isPlayerReady(player: Player): boolean {
    return player.status === PlayerStatuses.VOTED;
  }
}
