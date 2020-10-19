import { PlayerType } from '@planning-poker/api-interfaces';

export interface JoinRequestDto {
  name: string;
  room: string;
  type: PlayerType;
}
