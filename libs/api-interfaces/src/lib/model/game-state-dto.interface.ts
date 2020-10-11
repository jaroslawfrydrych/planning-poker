import { GameStates } from '@planning-poker/api-interfaces';

export interface GameStateDto {
  room: string,
  state: GameStates
}
