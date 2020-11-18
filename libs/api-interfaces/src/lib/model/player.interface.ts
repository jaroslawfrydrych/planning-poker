import { Cards, PlayerStatuses, PlayerType } from '../..';

export interface Player {
  id: string;
  type?: PlayerType;
  room?: string;
  name?: string;
  date?: number;
  card?: Cards;
  status?: PlayerStatuses;
}
