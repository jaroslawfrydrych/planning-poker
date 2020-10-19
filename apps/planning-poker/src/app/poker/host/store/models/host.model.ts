import { Player } from '@planning-poker/api-interfaces';
import { BaseModel } from '@store/model/base.model';

export interface HostModel extends BaseModel {
  players: Player[];
}
