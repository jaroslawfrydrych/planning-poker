import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

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
  @Input() public cardsInRow = 5;

  public isPlayerReady(player: Player): boolean {
    console.log('is player ready', player.status);
    return player.status === PlayerStatuses.VOTED;
  }
}
