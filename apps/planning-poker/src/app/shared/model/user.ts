import { Cards } from '@shared/card/cards.enum';
import { UserStatus } from '@shared/enum/user-status.enum';

export interface User {
  id: string;
  name: string;
  status: UserStatus;
  icon?: string;
  card?: Cards;
}
