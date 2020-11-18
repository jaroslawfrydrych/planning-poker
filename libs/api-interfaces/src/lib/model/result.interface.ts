import { Cards } from '@planning-poker/api-interfaces';

export interface Result {
  card: Cards | null;
  name: string;
}
