import { Cards, UserStatuses } from '../..';
import { PlayerType } from '../enum/client-type.enum';

export interface Player {
  id: string;
  type?: PlayerType;
  room?: string;
  name?: string;
  date?: number;
  card?: Cards;
  status?: UserStatuses;
}
