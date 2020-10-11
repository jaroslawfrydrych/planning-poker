import { Cards, UserStatuses } from '../..';
import { ClientType } from '../enum/client-type.enum';

export interface Client {
  id: string;
  type?: ClientType;
  room?: string;
  name?: string;
  date?: number;
  card?: Cards;
  status?: UserStatuses;
}
