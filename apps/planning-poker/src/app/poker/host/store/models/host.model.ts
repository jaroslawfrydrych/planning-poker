import { GameStates, Player } from '@planning-poker/api-interfaces';
import { BaseModel } from '@store/model/base.model';

export interface HostModel extends BaseModel {
  players: Map<string, Player>;
  gameState: GameStates;
}
