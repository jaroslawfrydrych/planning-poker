import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { ConnectionError, ConnectionStatus } from '@planning-poker/utils';

import { StoreName } from '@store/store-name.enum';

import { SocketActions } from '../actions/socket.actions';
import { SocketModel } from '../model/socket.model';

import SetConnectionStatus = SocketActions.SetConnectionStatus;

interface ConnectionStatusModel {
  connectionStatus: ConnectionStatus & ConnectionError
}

@State<SocketModel>({
  name: StoreName.SOCKET,
  defaults: {
    connectionStatus: ConnectionStatus.DISCONNECTED,
    connectionError: null
  }
})
@Injectable()
export class SocketState {

  @Selector<ConnectionStatus>()
  public static connectionStatus(state: SocketModel): ConnectionStatus {
    return state.connectionStatus;
  }

  @Selector<ConnectionError>()
  public static connectionError(state: SocketModel): ConnectionError {
    return state.connectionError;
  }

  @Action(SetConnectionStatus)
  public setConnectionStatus({getState, patchState}: StateContext<SocketModel>, {connectionStatus}: ConnectionStatusModel) {
    const state: SocketModel = getState();

    if (connectionStatus === ConnectionStatus.CONNECTED || connectionStatus === ConnectionStatus.DISCONNECTED) {
      patchState({
        connectionStatus,
        connectionError: connectionStatus === ConnectionStatus.CONNECTED ? null : state.connectionError
      });
    } else {
      patchState({
        connectionError: connectionStatus
      });
    }
  }
}
