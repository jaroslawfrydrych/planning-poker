import { Injectable } from '@angular/core';
import { Action, Actions, ofAction, Selector, State, StateContext } from '@ngxs/store';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { Observable } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

import {
  Cards,
  GameStates,
  JoinRoomCodeResponseDto,
  Player,
  ResultsDto,
  RoomInfo
} from '@planning-poker/api-interfaces';

import { GuestService } from '../../guest.service';
import { GuestActions } from '../actions/guest.actions';
import { GuestModel } from '../models/guest.model';
import JoinRoom = GuestActions.JoinRoom;
import ChooseCard = GuestActions.ChooseCard;
import GuestGameInit = GuestActions.GuestGameInit;
import RoomNumberValidation = GuestActions.RoomNumberValidation;
import GuestRoomNumberValidationInit = GuestActions.GuestRoomNumberValidationInit;
import GuestNameInit = GuestActions.GuestNameInit;
import GetGameState = GuestActions.GetGameState;
import LeaveRoom = GuestActions.LeaveRoom;
import RemoveRoom = GuestActions.RemoveRoom;
import SetRoomInfo = GuestActions.SetRoomInfo;
import GetRoomRemove = GuestActions.GetRoomRemove;
import GetPlayersResults = GuestActions.GetPlayersResults;

interface JoinRoomModel {
  name: string;
}

interface RoomNumberModel {
  roomNumber: string;
}

interface ChooseCardModel {
  card: Cards;
}

interface SetRoomInfoModel {
  payload: RoomInfo;
}

@State<GuestModel>({
  name: 'guest',
  defaults: {
    name: null,
    card: null,
    gameState: null,
    isRoomNumberValid: null,
    roomNumber: null,
    availableCards: [],
    players: new Map<string, Player>()
  }
})
@Injectable()
export class GuestState {

  @Selector<boolean>()
  public static isRoomNumberValid(state: GuestModel): boolean {
    return state.isRoomNumberValid;
  }

  @Selector<string>()
  public static roomNumber(state: GuestModel): string {
    return state.roomNumber;
  }

  @Selector<boolean>()
  public static hasRoomNumber(state: GuestModel): boolean {
    return !!state.roomNumber;
  }

  @Selector<Cards>()
  public static card(state: GuestModel): Cards {
    return state.card;
  }

  @Selector<GameStates>()
  public static gameState(state: GuestModel): GameStates {
    return state.gameState;
  }

  @Selector<Cards[]>()
  public static availableCards(state: GuestModel): Cards[] {
    return state.availableCards;
  }

  @Selector<Player[]>()
  public static players(state: GuestModel): Player[] {
    return Array.from(state.players.values());
  }

  constructor(private $gaService: GoogleAnalyticsService,
              private guestService: GuestService,
              private actions$: Actions) {
  }

  @Action(GuestRoomNumberValidationInit)
  public guestRoomNumberValidationInit(): void {
    this.$gaService.pageView('/guest/room-code');
  }

  @Action(GuestNameInit)
  public guestNameInit(): void {
    this.$gaService.pageView('/guest/your-name');
  }

  @Action(GuestGameInit)
  public guestGameInit(): void {
    this.$gaService.pageView('/guest/game');
    this.guestService.roomJoined();
  }

  @Action(RoomNumberValidation)
  public roomCode(context: StateContext<GuestModel>, {roomNumber}: RoomNumberModel): Observable<boolean> {
    return this.guestService.validateRoomNumber(roomNumber)
      .pipe(
        map((response: JoinRoomCodeResponseDto) => response.valid),
        tap((isRoomNumberValid: boolean) => {
          const state: GuestModel = context.getState();

          if (isRoomNumberValid) {
            this.$gaService.event('code_enter_valid', 'guest', 'Enter code valid');

            context.setState({
              ...state,
              roomNumber,
              isRoomNumberValid
            });
          } else {
            this.$gaService.event('code_enter_invalid', 'guest', 'Enter code invalid');

            context.setState({
              ...state,
              isRoomNumberValid
            });
          }
        })
      );
  }

  @Action(JoinRoom)
  public joinRoom(context: StateContext<GuestModel>, {name}: JoinRoomModel): void {
    const state: GuestModel = context.getState();

    this.guestService.joinRoom(name, state.roomNumber);

    context.setState({
      ...state,
      name
    });
  }

  @Action(SetRoomInfo)
  public setRoomInfo(context: StateContext<GuestModel>, {payload}: SetRoomInfoModel) {
    const state: GuestModel = context.getState();

    context.setState({
      ...state,
      gameState: payload.gameState,
      availableCards: this.guestService.availableCards
    });
  }

  @Action(GetGameState)
  public getGameState(context: StateContext<GuestModel>): void {
    this.guestService.getGameState()
      .pipe(
        takeUntil(this.actions$.pipe(ofAction(LeaveRoom, RemoveRoom)))
      )
      .subscribe((gameState: GameStates) => {
        const state: GuestModel = context.getState();

        if (gameState === GameStates.IN_PROGRESS) {
          context.setState({
            ...state,
            gameState,
            card: null
          });
        } else {
          context.setState({
            ...state,
            gameState
          });
        }
      });
  }

  @Action(GetPlayersResults)
  public getPlayersResults(context: StateContext<GuestModel>): void {
    this.guestService.getResults()
      .pipe(
        takeUntil(this.actions$.pipe(ofAction(LeaveRoom, RemoveRoom)))
      )
      .subscribe((results: ResultsDto) => {
        const players: Map<string, Player> = new Map<string, Player>();

        Object.keys(results)
          .forEach((id: string) => {
            players.set(id, {
              id,
              name: results[id].name,
              card: results[id].card
            })
          });

        context.patchState({
          players
        });
      });
  }

  @Action(GetRoomRemove)
  public getRoomRemove(context: StateContext<GuestModel>): void {
    this.guestService.roomRemove()
      .pipe(
        takeUntil(this.actions$.pipe(ofAction(LeaveRoom, RemoveRoom)))
      )
      .subscribe(() => {
        context.dispatch(new RemoveRoom());
      });
  }

  @Action(ChooseCard)
  public chooseCard(context: StateContext<GuestModel>, {card}: ChooseCardModel): void {
    this.$gaService.event('user_voted', 'guest', 'User voted');

    const state: GuestModel = context.getState();

    if (state.gameState === GameStates.REVIEW) {
      return;
    }

    this.guestService.chooseCard(card, state.roomNumber);

    context.patchState({
      card
    });
  }

  @Action(LeaveRoom)
  public leaveRoom(): void {
    this.$gaService.event('user_leave_room', 'guest', 'User leved room');
    this.guestService.leaveRoom();
  }

  @Action([RemoveRoom, LeaveRoom])
  public resetRoom(context: StateContext<GuestModel>): void {
    context.setState({
      name: null,
      card: null,
      gameState: null,
      isRoomNumberValid: null,
      roomNumber: null,
      availableCards: [],
      players: new Map<string, Player>()
    });
  }
}
