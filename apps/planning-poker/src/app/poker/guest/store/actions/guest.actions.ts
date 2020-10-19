import { Cards, RoomInfo } from '@planning-poker/api-interfaces';

export namespace GuestActions {

  export class GuestRoomNumberValidationInit {
    static readonly type = '[GuestActions] Initialize guest room number validation';
  }

  export class GuestNameInit {
    static readonly type = '[GuestActions] Guest name init';
  }

  export class GuestGameInit {
    static readonly type = '[GuestActions] Initialize guest game';
  }

  export class RoomNumberValidation {
    static readonly type = '[GuestActions] Room number validation';

    constructor(public roomNumber: string) {
    }
  }

  export class JoinRoom {
    static readonly type = '[GuestActions] Join room';

    constructor(public name: string) {
    }
  }

  export class SetRoomInfo {
    static readonly type = '[GuestActions] Set room info';

    constructor(public payload: RoomInfo) {
    }
  }

  export class ChooseCard {
    static readonly type = '[GuestActions] Choose card';

    constructor(public card: Cards) {
    }
  }

  export class GetGameState {
    static readonly type = '[GuestActions] Get game state';
  }

  export class GetRoomRemove {
    static readonly type = '[GuestActions] Get room remove';
  }

  export class RemoveRoom {
    static readonly type = '[GuestActions] Remove room';
  }

  export class CloseRoom {
    static readonly type = '[GuestActions] Close room';
  }
}
