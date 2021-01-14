import { Observable } from 'rxjs';

import { GameStates, Player } from '@planning-poker/api-interfaces';

export interface ModalGameResultsConfig {
  gameState$: Observable<GameStates>,
  players$: Observable<Player[]>,
  cardsInRow: number
}
