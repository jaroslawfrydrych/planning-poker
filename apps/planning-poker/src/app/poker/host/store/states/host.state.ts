import { Injectable } from '@angular/core';
import { Action, Actions, ofAction, Selector, State, StateContext } from '@ngxs/store';

import { GameStates, Player, PlayerType, RoomInfo } from '@planning-poker/api-interfaces';
import { Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { PokerService } from '../../../service/poker.service';
import { HostActions } from '../actions/host.actions';
import { HostModel } from '../models/host.model';
import CloseRoom = HostActions.CloseRoom;
import CreateRoom = HostActions.CreateRoom;
import GetGameState = HostActions.GetGameState;
import GetUsers = HostActions.GetPlayers;
import JoinRoom = HostActions.JoinRoom;
import ToggleGameState = HostActions.ToggleGameState;

@State<HostModel>({
  name: 'host',
  defaults: {
    room: null,
    gameState: GameStates.IN_PROGRESS,
    players: []
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
  public static players(state: HostModel): Player[] {
    return state.players;
  }

  constructor(private pokerService: PokerService,
              private actions$: Actions) {
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

  @Action(JoinRoom)
  public joinRoom(context: StateContext<HostModel>): void {
    const state: HostModel = context.getState();

    this.pokerService.joinRoom(state.room, PlayerType.HOST);
  }

  @Action(GetUsers)
  public getUsers(context: StateContext<HostModel>): void {
    this.pokerService.getUsers()
      .pipe(
        takeUntil(this.actions$.pipe(ofAction(CloseRoom)))
      )
      .subscribe((players: Player[]) => {
        context.patchState({
          players
        });
      });
  }

  @Action(GetGameState)
  public getGameState(context: StateContext<HostModel>): void {
    this.pokerService.getGameState()
      .pipe(
        takeUntil(this.actions$.pipe(ofAction(CloseRoom)))
      )
      .subscribe((gameState: GameStates) => {
        context.patchState({
          gameState
        });
      });
  }

  @Action(CloseRoom)
  public closeRoom(): void {
  }
}
