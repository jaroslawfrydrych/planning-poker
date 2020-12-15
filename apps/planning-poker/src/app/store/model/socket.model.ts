import { ConnectionError, ConnectionStatus } from '@planning-poker/utils';

export interface SocketModel {
  connectionStatus: ConnectionStatus;
  connectionError: ConnectionError | null;
}
