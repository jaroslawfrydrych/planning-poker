import { GameStates, Player } from '@planning-poker/api-interfaces';

export interface HostModel {
  room: string;
  gameState: GameStates,
  players: Player[]
}
