import { ConnectionError } from '@shared/enum/connection-error.enum';
import { ConnectionStatus } from '@shared/enum/connection-status.enum';

export interface SocketModel {
  connectionStatus: ConnectionStatus;
  connectionError: ConnectionError | null;
}
