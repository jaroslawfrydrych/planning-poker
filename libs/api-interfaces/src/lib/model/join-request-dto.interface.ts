import { PlayerType } from '../enum/player-type.enum';

export interface JoinRequestDto {
  name: string;
  room: string;
  type: PlayerType;
}
