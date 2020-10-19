import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { GameStates, Player, RoomInfo } from '@planning-poker/api-interfaces';

import { PokerService } from '../../../service/poker.service';
import { HostActions } from '../actions/host.actions';
import { HostModel } from '../models/host.model';
import CreateRoom = HostActions.CreateRoom;
import SetGameState = HostActions.SetGameState;
import ToggleGameState = HostActions.ToggleGameState;
import SetGameUsers = HostActions.SetGameUsers;

interface SetGameStateModel {
  gameState: GameStates
}

interface SetGameUsersModel {
  users: Player[]
}

@State<HostModel>({
  name: 'host',
  defaults: {
    room: null,
    gameState: GameStates.IN_PROGRESS,
    users: []
  }
})
@Injectable()
export class HostState {

  @Selector<GameStates>()
  public static gameState(state: HostModel): GameStates {
    return state.gameState;
  }

  @Selector<string>()
  public static roomNumber(state: HostModel): string {
    return state.room;
  }

  @Selector<string>()
  public static users(state: HostModel): Player[] {
    return state.users;
  }

  constructor(private pokerService: PokerService) {
  }

  @Action(CreateRoom)
  public createRoom(context: StateContext<HostModel>): Observable<RoomInfo> {
    return this.pokerService.createRoom()
      .pipe(
        tap((roomInfo: RoomInfo) => {
          const state: HostModel = context.getState();

          context.setState({
            ...state,
            room: roomInfo.id,
            gameState: roomInfo.gameState
          });
        })
      );
  }

  @Action(ToggleGameState)
  public toggleHostState(context: StateContext<HostModel>): void {
    const state: HostModel = context.getState();

    this.pokerService.toggleGameState(state.room);
  }

  @Action(SetGameState)
  public setGameState(context: StateContext<HostModel>, {gameState}: SetGameStateModel): void {
    const state: HostModel = context.getState();

    context.setState({
      ...state,
      gameState
    });
  }

  @Action(SetGameUsers)
  public setGameUsers(context: StateContext<HostModel>, {users}: SetGameUsersModel): void {
    const state: HostModel = context.getState();

    context.setState({
      ...state,
      users
    })
  }
}
