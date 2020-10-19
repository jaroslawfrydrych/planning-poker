import { GameStates } from '@planning-poker/api-interfaces';

export interface HostModel {
  room: string;
  gameState: GameStates,
  users: any[]
}
