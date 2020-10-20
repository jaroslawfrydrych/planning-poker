import { Injectable } from '@angular/core';
import { Action, Actions, ofAction, Selector, State, StateContext } from '@ngxs/store';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { Observable } from 'rxjs';
import { mergeMap, takeUntil, tap } from 'rxjs/operators';

import { GameStates, Player, RoomInfo } from '@planning-poker/api-interfaces';

import { HostService } from '../../host.service';
import { HostActions } from '../actions/host.actions';
import { HostModel } from '../models/host.model';
import CloseRoom = HostActions.CloseRoom;
import CreateRoom = HostActions.CreateRoom;
import GetGameState = HostActions.GetGameState;
import GetUsers = HostActions.GetPlayers;
import JoinRoom = HostActions.JoinRoom;
import ToggleGameState = HostActions.ToggleGameState;
import HostBoardInit = HostActions.HostBoardInit;
import CopyRoomLink = HostActions.CopyRoomLink;

@State<HostModel>({
  name: 'host',
  defaults: {
    roomNumber: null,
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
    return state.roomNumber;
  }

  @Selector<string>()
  public static players(state: HostModel): Player[] {
    return state.players;
  }

  constructor(private hostService: HostService,
              private $gaService: GoogleAnalyticsService,
              private actions$: Actions) {
  }

  @Action(HostBoardInit)
  public hostBoardInit(): void {
    this.$gaService.pageView('/host/board');
  }

  @Action(CreateRoom)
  public createRoom(context: StateContext<HostModel>): Observable<void> {
    return this.hostService.createRoom()
      .pipe(
        tap((roomInfo: RoomInfo) => {
          const state: HostModel = context.getState();

          context.setState({
            ...state,
            roomNumber: roomInfo.id,
            gameState: roomInfo.gameState
          });
        }),
        mergeMap(() => context.dispatch(new JoinRoom()))
      );
  }

  @Action(ToggleGameState)
  public toggleHostState(context: StateContext<HostModel>): void {
    this.$gaService.event('toggle_game_state', 'host', 'Toggle game state');

    const state: HostModel = context.getState();

    this.hostService.toggleGameState(state.roomNumber);
  }

  @Action(JoinRoom)
  public joinRoom(context: StateContext<HostModel>): void {
    const state: HostModel = context.getState();

    this.hostService.joinRoom(state.roomNumber);
  }

  @Action(GetUsers)
  public getUsers(context: StateContext<HostModel>): void {
    this.hostService.getUsers()
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
    this.hostService.getGameState()
      .pipe(
        takeUntil(this.actions$.pipe(ofAction(CloseRoom)))
      )
      .subscribe((gameState: GameStates) => {
        context.patchState({
          gameState
        });
      });
  }

  @Action(CopyRoomLink)
  public copyRoomLink(): void {
    this.$gaService.event('copy_room_link', 'host', 'Copy room link');
  }

  @Action(CloseRoom)
  public closeRoom(context: StateContext<HostModel>): void {
    const state: HostModel = context.getState();
    this.$gaService.event('close_room', 'host', 'Close room');
    this.hostService.closeRoom(state.roomNumber);
  }
}
