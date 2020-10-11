import { GameStates } from '@planning-poker/api-interfaces';

export interface GameStateBroadcastDto {
  state: GameStates,
  room: string
}
