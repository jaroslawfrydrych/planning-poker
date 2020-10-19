import { GameStates } from '@planning-poker/api-interfaces';

export interface BaseModel {
  roomNumber: string;
  gameState: GameStates;
}
