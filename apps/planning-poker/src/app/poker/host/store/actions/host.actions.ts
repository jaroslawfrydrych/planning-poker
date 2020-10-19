export namespace HostActions {

  export class CreateRoom {
    static readonly type = '[HostActions] Create room';
  }

  export class ToggleGameState {
    static readonly type = '[HostActions] Toggle Game State';
  }

  export class JoinRoom {
    static readonly type = '[HostActions] Join room';
  }

  export class GetPlayers {
    static readonly type = '[HostActions] Get players';
  }

  export class GetGameState {
    static readonly type = '[HostActions] Get game state';
  }

  export class CloseRoom {
    static readonly type = '[HostActions] Close room';
  }
}
