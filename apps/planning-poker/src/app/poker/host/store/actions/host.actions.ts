import { GameStates, Player } from '@planning-poker/api-interfaces';

export namespace HostActions {

  export class CreateRoom {
    static readonly type = '[HostActions] Create room';
  }

  export class ToggleGameState {
    static readonly type = '[HostActions] Toggle Game State';
  }

  export class FetchVotes {
    static readonly type = '[HostActions] Fetch Votes';
  }

  export class SetGameState {
    static readonly type = '[HostActions] Set game state';

    constructor(public gameState: GameStates) {
    }
  }

  export class SetGameUsers {
    static readonly type = '[HostActions] Set game users';

    constructor(public users: Player[]) {
    }
  }
}
