import { ClientType } from '@planning-poker/api-interfaces';

export interface JoinRequestDto {
  name: string;
  room: string;
  type: ClientType;
}
